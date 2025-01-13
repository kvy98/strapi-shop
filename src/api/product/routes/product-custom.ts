export default {
    routes:[
        {
          "method": "GET",
          "path": "/product", 
          "handler": "product.findBySlug", 
          "config": {
            "auth": false, 
            "policies": [],
            "middlewares": []
          }
        }
      ]
      
}