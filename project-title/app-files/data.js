var APP_DATA = {
  "scenes": [
    {
      "id": "0-faculty-of-engineering",
      "name": "Faculty of Engineering",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.2727089255442312,
        "pitch": 0.05298540373166993,
        "fov": 1.3675280391696585
      },
      "linkHotspots": [
        {
          "yaw": 0.15934466028145877,
          "pitch": -0.27172255004575874,
          "rotation": 6.283185307179586,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7990306725545366,
          "pitch": 0.040621886565118004,
          "title": "Faculty of Engineering",
          "text": "Hello"
        }
      ]
    },
    {
      "id": "1-engineering-atrium",
      "name": "Engineering Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.10726502694548934,
        "pitch": -0.030277373560949172,
        "fov": 1.3675280391696585
      },
      "linkHotspots": [
        {
          "yaw": 3.009524796418159,
          "pitch": 0.06401179100588905,
          "rotation": 0,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4297388204300656,
          "pitch": 0.22770003502577119,
          "title": "Engineering Atrium",
          "text": "Hello"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.3257603790172539,
        "pitch": -0.21334874155207473,
        "fov": 1.3675280391696585
      },
      "linkHotspots": [
        {
          "yaw": 0.051008781220591715,
          "pitch": 0.0077884482071013394,
          "rotation": 0,
          "target": "1-engineering-atrium"
        },
        {
          "yaw": 2.9328687708312042,
          "pitch": 0.05993505216881445,
          "rotation": 0,
          "target": "0-faculty-of-engineering"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
