const fs = require('fs/promises')
const Jimp = require('jimp')
const { User } = require('../../models/user')

const uploadAvatar = async (req, res, next) => { 
  const { path } = req.file
  const { _id } = req.user
  const [, extension] = req.file.originalname.split('.')
  const avaName = `${_id}-avatar.${extension}`

  await (await Jimp.read(path))
    .resize(250, 250)
    .quality(60)
    .write(`./public/avatars/${avaName}`)
  
  await fs.unlink(path)
  const avaUrl = `/avatars/${avaName}`

  const updateUser = await User.findByIdAndUpdate(
    _id,
    { avaUrl: avaUrl },
    {name: true}
  )
  res.json({
    avaUrl: updateUser.avaUrl
  })
}

module.exports = uploadAvatar