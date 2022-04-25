import Mock from 'mockjs'

// 获取目录
Mock.mock('/api/getMenu', 'get', () => {
  return [
    {
      title: "HOME",
      path: "/home/index",
    },
    {
      title: "NEWS",
      path: "/home/index",
    },
    {
      title: "WEAPONS",
      path: "/home/index",
    },
    {
      title: "MAP",
      path: "/home/index",
    },
    {
      title: "CHARACTERS",
      path: "/home/characters",
    },
    {
      title: "WALLPAPER",
      path: "/home/index",
    },
  ]
})

// 获取图片
Mock.mock('/api/getImg', 'get', () => {
  return [
    {
      img: "img-1.jpg",
    },
    {
      img: "img-1.jpg",
    },
    {
      img: "img-1.jpg",
    },
    {
      img: "img-1.jpg",
    },
    {
      img: "img-1.jpg",
    },
    {
      img: "img-1.jpg",
    },
    {
      img: "img-1.jpg",
    },
    {
      img: "img-1.jpg",
    },
    {
      img: "img-1.jpg",
    }
  ]
})