import image from '../models/image';

export default {
  render(images: image) {
    return {
      id: images.id,
      url: `http://127.0.0.1:3333/uploads/${images.path}`,
    };
  },

  renderMany(images: image[]) {

    return images.map(images => this.render(images));

  }
};