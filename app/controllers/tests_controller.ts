import type { HttpContext } from '@adonisjs/core/http'
import drive from '@adonisjs/drive/services/main'

export default class TestsController {
  async index({ view }: HttpContext) {
    const videoUrl: string = await drive.use('s3').getSignedUrl('code_on_screen.mp4', { 
      expiresIn: '1h' 
    })
    
    return view.render('pages/examplestream', { videoUrl })
  }
}