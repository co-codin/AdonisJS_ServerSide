'use strict'

const Post = use('App/Models/Post')

class HomeController {

  async index ({ view, request, response }) {
    let posts = await Post.query()
        .fetch()

    return view.render('index', {
      posts
    })
  }
}

module.exports = HomeController
