422 results - 228 files

examples\css2d_label:
  59  					shininess: 5,
  60: 					map: textureLoader.load( 'textures/planets/earth_atmos_2048' ),
  61: 					specularMap: textureLoader.load( 'textures/planets/earth_specular_2048' ),
  62: 					normalMap: textureLoader.load( 'textures/planets/earth_normal_2048' ),
  63  					normalScale: new THREE.Vector2( 0.85, 0.85 )

  70  					shininess: 5,
  71: 					map: textureLoader.load( 'textures/planets/moon_1024' )
  72  				} );

examples\css3d_molecules:
  323  
  324: 				loader.load( url, function ( pdb ) {
  325  

examples\misc_controls_deviceorientation:
  49  				const material = new THREE.MeshBasicMaterial( {
  50: 					map: new THREE.TextureLoader().load( 'textures/2294472375_24a3b8ef46_o' )
  51  				} );

examples\misc_controls_fly:
   83  					shininess: 15,
   84: 					map: textureLoader.load( "textures/planets/earth_atmos_2048" ),
   85: 					specularMap: textureLoader.load( "textures/planets/earth_specular_2048" ),
   86: 					normalMap: textureLoader.load( "textures/planets/earth_normal_2048" ),
   87  

  105  
  106: 					map: textureLoader.load( "textures/planets/earth_clouds_1024" ),
  107  					transparent: true

  119  
  120: 					map: textureLoader.load( "textures/planets/moon_1024" )
  121  

examples\misc_controls_transform:
  53  
  54: 				const texture = new THREE.TextureLoader().load( 'textures/crate.gif', render );
  55  				texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

examples\misc_exporter_collada:
   88  
   89: 				const textureMap = loader.load( 'textures/uv_grid_opengl' );
   90  				textureMap.wrapS = textureMap.wrapT = THREE.RepeatWrapping;

   95  
   96: 				const diffuseMap = loader.load( 'textures/floors/FloorsCheckerboard_S_Diffuse' );
   97: 				const normalMap = loader.load( 'textures/floors/FloorsCheckerboard_S_Normal' );
   98  

  106  
  107: 				textureCube = new THREE.CubeTextureLoader().load( urls );
  108  				textureCube.encoding = THREE.sRGBEncoding;

examples\misc_exporter_gltf:
  203  				// Icosahedron
  204: 				const mapGrid = new THREE.TextureLoader().load( 'textures/uv_grid_opengl' );
  205  				mapGrid.wrapS = mapGrid.wrapT = THREE.RepeatWrapping;

  277  				// ---------------------------------------------------------------------
  278: 				const mapWood = new THREE.TextureLoader().load( 'textures/hardwood2_diffuse' );
  279  				material = new THREE.MeshStandardMaterial( { map: mapWood, side: THREE.DoubleSide } );

  465  				const loader = new OBJLoader();
  466: 				loader.load( 'models/obj/walt/WaltHead', function ( obj ) {
  467  

examples\misc_legacy:
  47  					.setDataType( THREE.UnsignedByteType )
  48: 					.load( './textures/equirectangular/venice_sunset_1k.hdr', function ( texture ) {
  49  

  58  				var loader = new THREE.GLTFLoader();
  59: 				loader.load( url, function ( gltf ) {
  60  

examples\physics_ammo_break:
  185  			ground.receiveShadow = true;
  186: 			textureLoader.load( "textures/grid", function ( texture ) {
  187  

examples\physics_ammo_cloth:
  146  				ground.receiveShadow = true;
  147: 				textureLoader.load( "textures/grid", function ( texture ) {
  148  

  228  				scene.add( cloth );
  229: 				textureLoader.load( "textures/grid", function ( texture ) {
  230  

examples\physics_ammo_rope:
  150  			ground.receiveShadow = true;
  151: 			textureLoader.load( "textures/grid", function ( texture ) {
  152  

examples\physics_ammo_terrain:
  129  				const textureLoader = new THREE.TextureLoader();
  130: 				textureLoader.load( "textures/grid", function ( texture ) {
  131  

examples\physics_ammo_volume:
  151  				ground.receiveShadow = true;
  152: 				textureLoader.load( "textures/grid", function ( texture ) {
  153  

  253  
  254: 				textureLoader.load( "textures/colors", function ( texture ) {
  255  

examples\svg_sandbox:
   41  				const loader = new THREE.BufferGeometryLoader();
   42: 				loader.load( 'models/json/QRCode_buffergeometry', function ( geometry ) {
   43  

  182  				const fileLoader = new THREE.FileLoader();
  183: 				fileLoader.load( 'models/svg/hexagon.svg', function ( svg ) {
  184  

examples\webaudio_orientation:
   50  				.setPath( 'textures/cube/SwedishRoyalCastle/' )
   51: 				.load( [ 'px', 'nx', 'py', 'ny', 'pz', 'nz' ] );
   52  

  104  			const gltfLoader = new GLTFLoader();
  105: 			gltfLoader.load( 'models/gltf/BoomBox/glTF-Binary/BoomBox', function ( gltf ) {
  106  

examples\webaudio_sandbox:
   72  				const sound1 = new THREE.PositionalAudio( listener );
   73: 				audioLoader.load( 'sounds/358232_j_s_song.ogg', function ( buffer ) {
   74  

   88  				const sound2 = new THREE.PositionalAudio( listener );
   89: 				audioLoader.load( 'sounds/376737_Skullbeatz___Bad_Cat_Maste.ogg', function ( buffer ) {
   90  

  122  				const sound4 = new THREE.Audio( listener );
  123: 				audioLoader.load( 'sounds/Project_Utopia.ogg', function ( buffer ) {
  124  

examples\webaudio_timing:
  101  
  102: 			audioLoader.load( 'sounds/ping_pong.mp3', function ( buffer ) {
  103  

examples\webaudio_visualizer:
  95  					const loader = new THREE.AudioLoader();
  96: 					loader.load( file, function ( buffer ) {
  97  

examples\webgl_animation_cloth:
  455  				const loader = new THREE.TextureLoader();
  456: 				const clothTexture = loader.load( 'textures/patterns/circuit_pattern' );
  457  				clothTexture.anisotropy = 16;

  494  
  495: 				const groundTexture = loader.load( 'textures/terrain/grasslight-big' );
  496  				groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;

examples\webgl_animation_keyframes:
  74  			const format = '';
  75: 			const envMap = new THREE.CubeTextureLoader().load( [
  76  				path + 'posx' + format, path + 'negx' + format,

  85  			loader.setDRACOLoader( dracoLoader );
  86: 			loader.load( 'models/gltf/LittlestTokyo', function ( gltf ) {
  87  

examples\webgl_animation_multiple:
  258  
  259: 				loader.load( modelName, function ( gltf ) {
  260  

examples\webgl_animation_skinning_additive_blending:
  92  				const loader = new GLTFLoader();
  93: 				loader.load( 'models/gltf/Xbot', function ( gltf ) {
  94  

examples\webgl_animation_skinning_blending:
  96  				const loader = new GLTFLoader();
  97: 				loader.load( 'models/gltf/Soldier', function ( gltf ) {
  98  

examples\webgl_animation_skinning_morph:
  92  				const loader = new GLTFLoader();
  93: 				loader.load( 'models/gltf/RobotExpressive/RobotExpressive', function ( gltf ) {
  94  

examples\webgl_buffergeometry_compression:
  57  			// texture
  58: 			const texture = new THREE.TextureLoader().load( 'textures/uv_grid_opengl' );
  59  			texture.wrapS = THREE.RepeatWrapping;

examples\webgl_buffergeometry_custom_attributes_particles:
  72  
  73: 					pointTexture: { value: new THREE.TextureLoader().load( "textures/sprites/spark1" ) }
  74  

examples\webgl_buffergeometry_instancing_billboards:
  123  				uniforms: {
  124: 					"map": { value: new THREE.TextureLoader().load( 'textures/sprites/circle' ) },
  125  					"time": { value: 0.0 }

examples\webgl_buffergeometry_instancing_interleaved:
  110  			const material = new THREE.MeshBasicMaterial();
  111: 			material.map = new THREE.TextureLoader().load( 'textures/crate.gif' );
  112  			material.map.flipY = false;

examples\webgl_camera_logarithmicdepthbuffer:
  110  				const loader = new THREE.FontLoader();
  111: 				loader.load( 'fonts/helvetiker_regular.typeface', function ( font ) {
  112  

examples\webgl_custom_attributes_lines:
  60  			const loader = new THREE.FontLoader();
  61: 			loader.load( 'fonts/helvetiker_bold.typeface', function ( font ) {
  62  

examples\webgl_custom_attributes_points:
  117  						color: { value: new THREE.Color( 0xffffff ) },
  118: 						pointTexture: { value: new THREE.TextureLoader().load( "textures/sprites/spark1" ) }
  119  					},

examples\webgl_custom_attributes_points2:
  116  
  117: 				const texture = new THREE.TextureLoader().load( "textures/sprites/disc" );
  118  				texture.wrapS = THREE.RepeatWrapping;

examples\webgl_custom_attributes_points3:
  188  
  189: 				const texture = new THREE.TextureLoader().load( "textures/sprites/ball" );
  190  				texture.wrapS = THREE.RepeatWrapping;

examples\webgl_custom_attributes:
  85  					"color": { value: new THREE.Color( 0xff2200 ) },
  86: 					"colorTexture": { value: new THREE.TextureLoader().load( "textures/water" ) }
  87  

examples\webgl_decals:
   43  			const textureLoader = new THREE.TextureLoader();
   44: 			const decalDiffuse = textureLoader.load( 'textures/decal/decal-diffuse' );
   45: 			const decalNormal = textureLoader.load( 'textures/decal/decal-normal' );
   46  

  220  
  221: 				loader.load( 'models/gltf/LeePerrySmith/LeePerrySmith', function ( gltf ) {
  222  

  225  						specular: 0x111111,
  226: 						map: textureLoader.load( 'models/gltf/LeePerrySmith/Map-COL' ),
  227: 						specularMap: textureLoader.load( 'models/gltf/LeePerrySmith/Map-SPEC' ),
  228: 						normalMap: textureLoader.load( 'models/gltf/LeePerrySmith/Infinite-Level_02_Tangent_SmoothUV' ),
  229  						shininess: 25

examples\webgl_effects_anaglyph:
  52  
  53: 				const textureCube = new THREE.CubeTextureLoader().load( urls );
  54  

examples\webgl_effects_parallaxbarrier:
  53  
  54: 				const textureCube = new THREE.CubeTextureLoader().load( urls );
  55  

examples\webgl_effects_stereo:
  45  					.setPath( 'textures/cube/Park3Med/' )
  46: 					.load( [ 'px', 'nx', 'py', 'ny', 'pz', 'nz' ] );
  47  

  51  					.setPath( 'textures/cube/Park3Med/' )
  52: 					.load( [ 'px', 'nx', 'py', 'ny', 'pz', 'nz' ] );
  53  				textureCube.mapping = THREE.CubeRefractionMapping;

examples\webgl_geometries_parametric:
  47  
  48: 				const map = new THREE.TextureLoader().load( 'textures/uv_grid_opengl' );
  49  				map.wrapS = map.wrapT = THREE.RepeatWrapping;

examples\webgl_geometries:
  39  
  40: 				const map = new THREE.TextureLoader().load( 'textures/uv_grid_opengl' );
  41  				map.wrapS = map.wrapT = THREE.RepeatWrapping;

examples\webgl_geometry_colors_lookuptable:
  134  				const loader = new THREE.BufferGeometryLoader();
  135: 				loader.load( 'models/json/pressure', function ( geometry ) {
  136  

examples\webgl_geometry_convex:
  60  				const loader = new THREE.TextureLoader();
  61: 				const texture = loader.load( 'textures/sprites/disc' );
  62  

examples\webgl_geometry_cube:
  27  
  28: 				const texture = new THREE.TextureLoader().load( 'textures/crate.gif' );
  29  

examples\webgl_geometry_dynamic:
  61  
  62: 				const texture = new THREE.TextureLoader().load( 'textures/water' );
  63  				texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

examples\webgl_geometry_minecraft_ao:
  238  
  239: 				const texture = new THREE.TextureLoader().load( 'textures/minecraft/atlas' );
  240  				texture.magFilter = THREE.NearestFilter;

examples\webgl_geometry_minecraft:
  143  
  144: 				const texture = new THREE.TextureLoader().load( 'textures/minecraft/atlas' );
  145  				texture.magFilter = THREE.NearestFilter;

examples\webgl_geometry_nurbs:
  144  
  145: 				const map = new THREE.TextureLoader().load( 'textures/uv_grid_opengl' );
  146  				map.wrapS = map.wrapT = THREE.RepeatWrapping;

examples\webgl_geometry_shapes:
  61  				const loader = new THREE.TextureLoader();
  62: 				const texture = loader.load( "textures/uv_grid_opengl" );
  63  

examples\webgl_geometry_teapot:
  80  				// TEXTURE MAP
  81: 				const textureMap = new THREE.TextureLoader().load( 'textures/uv_grid_opengl' );
  82  				textureMap.wrapS = textureMap.wrapT = THREE.RepeatWrapping;

  93  
  94: 				textureCube = new THREE.CubeTextureLoader().load( urls );
  95  				textureCube.encoding = THREE.sRGBEncoding;

examples\webgl_geometry_text_shapes:
  42  				const loader = new THREE.FontLoader();
  43: 				loader.load( 'fonts/helvetiker_regular.typeface', function ( font ) {
  44  

examples\webgl_geometry_text_stroke:
  43  				const loader = new THREE.FontLoader();
  44: 				loader.load( 'fonts/helvetiker_regular.typeface', function ( font ) {
  45  

examples\webgl_geometry_text:
  329  				const loader = new THREE.FontLoader();
  330: 				loader.load( 'fonts/' + fontName + '_' + fontWeight + '.typeface', function ( response ) {
  331  

examples\webgl_gpgpu_birds_gltf:
  242  			const selectModel = Math.floor( Math.random() * gltfs.length );
  243: 			new GLTFLoader().load( gltfs[ selectModel ], function ( gltf ) {
  244  

examples\webgl_helpers:
  63  				const loader = new GLTFLoader();
  64: 				loader.load( 'models/gltf/LeePerrySmith/LeePerrySmith', function ( gltf ) {
  65  

examples\webgl_instancing_dynamic:
  36  				const loader = new THREE.BufferGeometryLoader();
  37: 				loader.load( 'models/json/suzanne_buffergeometry', function ( geometry ) {
  38  

examples\webgl_instancing_modified:
  46  
  47: 				new THREE.BufferGeometryLoader().load( 'models/json/suzanne_buffergeometry', function ( geometry ) {
  48  

  68  
  69: 					new THREE.TextureLoader().load( 'textures/matcaps/matcap-porcelain-white', function ( texture ) {
  70  

examples\webgl_instancing_performance:
  116  				.setPath( 'models/json/' )
  117: 				.load( 'suzanne_buffergeometry', function ( geometry ) {
  118  

examples\webgl_instancing_scatter:
  67  
  68: 			loader.load( './models/gltf/Flower/Flower', function ( gltf ) {
  69  

examples\webgl_interactive_points:
  114  						color: { value: new THREE.Color( 0xffffff ) },
  115: 						pointTexture: { value: new THREE.TextureLoader().load( "textures/sprites/disc" ) }
  116  					},

examples\webgl_interactive_voxelpainter:
  59  				cubeGeo = new THREE.BoxBufferGeometry( 50, 50, 50 );
  60: 				cubeMaterial = new THREE.MeshLambertMaterial( { color: 0xfeb74c, map: new THREE.TextureLoader().load( 'textures/square-outline-textured' ) } );
  61  

examples\webgl_lensflares:
  88  
  89: 				const textureFlare0 = textureLoader.load( 'textures/lensflare/lensflare0' );
  90: 				const textureFlare3 = textureLoader.load( 'textures/lensflare/lensflare3' );
  91  

examples\webgl_lightningstrike:
  416  
  417: 				const textureCube = new THREE.CubeTextureLoader().load( urls );
  418  				textureCube.mapping = THREE.CubeReflectionMapping;

examples\webgl_lightprobe_cubecamera:
  75  
  76: 				new THREE.CubeTextureLoader().load( urls, function ( cubeTexture ) {
  77  

examples\webgl_lightprobe:
  88  
  89: 				new THREE.CubeTextureLoader().load( urls, function ( cubeTexture ) {
  90  

examples\webgl_lights_hemisphere:
  166  
  167: 				loader.load( 'models/gltf/Flamingo', function ( gltf ) {
  168  

examples\webgl_lights_physical:
  107  				const textureLoader = new THREE.TextureLoader();
  108: 				textureLoader.load( "textures/hardwood2_diffuse", function ( map ) {
  109  

  118  				} );
  119: 				textureLoader.load( "textures/hardwood2_bump", function ( map ) {
  120  

  128  				} );
  129: 				textureLoader.load( "textures/hardwood2_roughness", function ( map ) {
  130  

  145  				} );
  146: 				textureLoader.load( "textures/brick_diffuse", function ( map ) {
  147  

  156  				} );
  157: 				textureLoader.load( "textures/brick_bump", function ( map ) {
  158  

  172  				} );
  173: 				textureLoader.load( "textures/planets/earth_atmos_2048", function ( map ) {
  174  

  180  				} );
  181: 				textureLoader.load( "textures/planets/earth_specular_2048", function ( map ) {
  182  

examples\webgl_lights_pointlights:
  42  				const loader = new OBJLoader();
  43: 				loader.load( 'models/obj/walt/WaltHead', function ( obj ) {
  44  

examples\webgl_lights_pointlights2:
  53  
  54: 				const texture = textureLoader.load( "textures/disturb" );
  55  				texture.repeat.set( 20, 10 );

examples\webgl_loader_3dm:
  50  
  51: 				loader.load( 'models/3dm/Rhino_Logo.3dm', function ( object ) {
  52  

examples\webgl_loader_3ds:
  43  				//3ds files dont store normal maps
  44: 				const normal = new THREE.TextureLoader().load( 'models/3ds/portalgun/textures/normal' );
  45  

  47  				loader.setResourcePath( 'models/3ds/portalgun/textures/' );
  48: 				loader.load( 'models/3ds/portalgun/portalgun.3ds', function ( object ) {
  49  

examples\webgl_loader_3mf_materials:
  65  				const loader = new ThreeMFLoader( manager );
  66: 				loader.load( './models/3mf/truck.3mf', function ( object ) {
  67  

examples\webgl_loader_3mf:
  110  
  111: 				loader.load( 'models/3mf/' + asset + '.3mf', function ( group ) {
  112  

examples\webgl_loader_amf:
  60  				const loader = new AMFLoader();
  61: 				loader.load( './models/amf/rook.amf', function ( amfobject ) {
  62  

examples\webgl_loader_assimp:
  64  				const loader = new AssimpLoader();
  65: 				loader.load( './models/assimp/octaminator/Octaminator.assimp', function ( result ) {
  66  

examples\webgl_loader_bvh:
  39  			const loader = new BVHLoader();
  40: 			loader.load( "models/bvh/pirouette.bvh", function ( result ) {
  41  

examples\webgl_loader_collada_kinematics:
  34  			const loader = new ColladaLoader();
  35: 			// loader.load( './models/collada/kawada-hironx.dae', function ( collada ) {
  36: 			loader.load( './models/collada/abb_irb52_7_120.dae', function ( collada ) {
  37  

examples\webgl_loader_collada_skinning:
  45  				const loader = new ColladaLoader();
  46: 				loader.load( './models/collada/stormtrooper/stormtrooper.dae', function ( collada ) {
  47  

examples\webgl_loader_collada:
  53  				const loader = new ColladaLoader( loadingManager );
  54: 				loader.load( './models/collada/elf/elf.dae', function ( collada ) {
  55  

examples\webgl_loader_draco:
  63  
  64: 			dracoLoader.load( 'models/draco/bunny.drc', function ( geometry ) {
  65  

examples\webgl_loader_fbx_nurbs:
  56  				const loader = new FBXLoader();
  57: 				loader.load( 'models/fbx/nurbs.fbx', function ( object ) {
  58  

examples\webgl_loader_fbx:
  73  				const loader = new FBXLoader();
  74: 				loader.load( 'models/fbx/Samba Dancing.fbx', function ( object ) {
  75  

examples\webgl_loader_gcode:
  37  				const loader = new GCodeLoader();
  38: 				loader.load( 'models/gcode/benchy.gcode', function ( object ) {
  39  

examples\webgl_loader_gltf_extensions:
  163  					.setPath( 'textures/equirectangular/' )
  164: 					.load( 'venice_sunset_1k.hdr', function ( texture ) {
  165  

  281  
  282: 				loader.load( url, function ( data ) {
  283  

examples\webgl_loader_gltf_variants:
  47  					.setPath( 'textures/equirectangular/' )
  48: 					.load( 'quarry_01_1k.hdr', function ( texture ) {
  49  

  62  						const loader = new GLTFLoader().setPath( 'models/gltf/MaterialsVariantsShoe/glTF/' );
  63: 						loader.load( 'MaterialsVariantsShoe.gltf', function ( gltf ) {
  64  

examples\webgl_loader_gltf:
  44  					.setPath( 'textures/equirectangular/' )
  45: 					.load( 'royal_esplanade_1k.hdr', function ( texture ) {
  46  

  62  						const loader = new GLTFLoader().setPath( 'models/gltf/DamagedHelmet/glTF/' );
  63: 						loader.load( 'DamagedHelmet.gltf', function ( gltf ) {
  64  

examples\webgl_loader_imagebitmap:
  27  					.setOptions( { imageOrientation: 'none' } )
  28: 					.load( 'textures/planets/earth_atmos_2048?' + performance.now(), function ( imageBitmap ) {
  29  

  55  					.setCrossOrigin( '*' )
  56: 					.load( 'textures/planets/earth_atmos_2048?' + performance.now(), function ( image ) {
  57  

examples\webgl_loader_kmz:
  51  				const loader = new KMZLoader();
  52: 				loader.load( './models/kmz/Box.kmz', function ( kmz ) {
  53  

examples\webgl_loader_ldraw:
  170  					.setPath( ldrawPath )
  171: 					.load( guiData.modelFileName, function ( group2 ) {
  172  

  198  									r + "posz", r + "negz" ];
  199: 								textureCube = new THREE.CubeTextureLoader().load( urls );
  200  								textureCube.mapping = THREE.CubeReflectionMapping;

examples\webgl_loader_lwo:
  69  				const loader = new LWOLoader();
  70: 				loader.load( 'models/lwo/Objects/LWO3/Demo.lwo', function ( object ) {
  71  

examples\webgl_loader_md2_control:
  104  
  105: 				const gt = new THREE.TextureLoader().load( "textures/terrain/grasslight-big" );
  106  				const gg = new THREE.PlaneBufferGeometry( 16000, 16000 );

examples\webgl_loader_md2:
  97  
  98: 				const gt = new THREE.TextureLoader().load( "textures/terrain/grasslight-big" );
  99  				const gg = new THREE.PlaneBufferGeometry( 2000, 2000 );

examples\webgl_loader_mdd:
  37  				const loader = new MDDLoader();
  38: 				loader.load( 'models/mdd/cube.mdd', function ( result ) {
  39  

examples\webgl_loader_mmd_audio:
  135  
  136: 						new THREE.AudioLoader().load( audioFile, function ( buffer ) {
  137  

examples\webgl_loader_mmd_pose:
  114  
  115: 				loader.load( modelFile, function ( object ) {
  116  

examples\webgl_loader_nodes:
   54  
   55: 					cloud = new THREE.TextureLoader().load( 'textures/lava/cloud' );
   56  					cloud.wrapS = cloud.wrapT = THREE.RepeatWrapping;

  155  
  156: 					const loader = new NodeMaterialLoader( undefined, library ).load( url, function () {
  157  

examples\webgl_loader_nrrd:
   75  				const loader = new NRRDLoader();
   76: 				loader.load( "models/nrrd/I.nrrd", function ( volume ) {
   77  

  141  				const vtkloader = new VTKLoader();
  142: 				vtkloader.load( "models/vtk/liver.vtk", function ( geometry ) {
  143  

examples\webgl_loader_obj_mtl:
  76  					.setPath( 'models/obj/male02/' )
  77: 					.load( 'male02_dds.mtl', function ( materials ) {
  78  

  83  							.setPath( 'models/obj/male02/' )
  84: 							.load( 'male02', function ( object ) {
  85  

examples\webgl_loader_obj:
  80  				const textureLoader = new THREE.TextureLoader( manager );
  81: 				const texture = textureLoader.load( 'textures/uv_grid_opengl' );
  82  

  98  				const loader = new OBJLoader( manager );
  99: 				loader.load( 'models/obj/male02/male02', function ( obj ) {
  100  

examples\webgl_loader_obj2_options:
  155  						fileLoader.setResponseType( 'arraybuffer' );
  156: 						fileLoader.load( 'models/obj/female02/female02',
  157  							function ( content ) {

  173  					const mtlLoader = new MTLLoader();
  174: 					mtlLoader.load( 'models/obj/female02/female02.mtl', onLoadMtl );
  175  

  209  					fileLoader.setResponseType( 'arraybuffer' );
  210: 					fileLoader.load( 'models/obj/female02/female02_vertex_colors',
  211  						function ( content ) {

  245  						objLoader2.addMaterials( MtlObjBridge.addMaterialsFromMtlLoader( mtlParseResult ), true );
  246: 						objLoader2.load( 'models/obj/male02/male02', callbackOnLoad, null, null, null );
  247  

  250  					const mtlLoader = new MTLLoader();
  251: 					mtlLoader.load( 'models/obj/male02/male02.mtl', onLoadMtl );
  252  

  282  						objLoader2Parallel.addMaterials( MtlObjBridge.addMaterialsFromMtlLoader( mtlParseResult ), true );
  283: 						objLoader2Parallel.load( 'models/obj/walt/WaltHead', callbackOnLoad );
  284  

  287  					const mtlLoader = new MTLLoader();
  288: 					mtlLoader.load( 'models/obj/walt/WaltHead.mtl', onLoadMtl );
  289  

  313  
  314: 					objLoader2Parallel.load( 'models/obj/cerberus/Cerberus', callbackOnLoad );
  315  

  358  
  359: 					objLoader2Parallel.load( 'models/obj/ninja/ninjaHead_Low', callbackOnLoad );
  360  

examples\webgl_loader_obj2:
  141  						objLoader2.addMaterials( MtlObjBridge.addMaterialsFromMtlLoader( mtlParseResult ), true );
  142: 						objLoader2.load( 'models/obj/female02/female02', callbackOnLoad, null, null, null );
  143  

  146  					const mtlLoader = new MTLLoader();
  147: 					mtlLoader.load( 'models/obj/female02/female02.mtl', onLoadMtl );
  148  

examples\webgl_loader_pcd:
  49  				const loader = new PCDLoader();
  50: 				loader.load( './models/pcd/binary/Zaghetto.pcd', function ( points ) {
  51  

examples\webgl_loader_pdb:
  175  
  176: 				loader.load( url, function ( pdb ) {
  177  

examples\webgl_loader_ply:
  61  				const loader = new PLYLoader();
  62: 				loader.load( './models/ply/ascii/dolphins.ply', function ( geometry ) {
  63  

  80  
  81: 				loader.load( './models/ply/binary/Lucy100k.ply', function ( geometry ) {
  82  

examples\webgl_loader_prwm:
  115  
  116: 					loader.load( url, function ( geometry ) {
  117  

examples\webgl_loader_stl:
   60  				const loader = new STLLoader();
   61: 				loader.load( './models/stl/ascii/slotted_disk.stl', function ( geometry ) {
   62  

   81  
   82: 				loader.load( './models/stl/binary/pr2_head_pan.stl', function ( geometry ) {
   83  

   96  
   97: 				loader.load( './models/stl/binary/pr2_head_tilt.stl', function ( geometry ) {
   98  

  112  				// Colored binary STL
  113: 				loader.load( './models/stl/binary/colored.stl', function ( geometry ) {
  114  

examples\webgl_loader_svg:
  144  
  145: 				loader.load( url, function ( data ) {
  146  

examples\webgl_loader_texture_basis:
  52  				loader.detectSupport( renderer );
  53: 				loader.load( 'textures/compressed/PavingStones.basis', function ( texture ) {
  54  

examples\webgl_loader_texture_dds:
  46  
  47: 				const map1 = loader.load( 'textures/compressed/disturb_dxt1_nomip.dds' );
  48  				map1.minFilter = map1.magFilter = THREE.LinearFilter;

  50  
  51: 				const map2 = loader.load( 'textures/compressed/disturb_dxt1_mip.dds' );
  52  				map2.anisotropy = 4;
  53  
  54: 				const map3 = loader.load( 'textures/compressed/hepatica_dxt3_mip.dds' );
  55  				map3.anisotropy = 4;
  56  
  57: 				const map4 = loader.load( 'textures/compressed/explosion_dxt5_mip.dds' );
  58  				map4.anisotropy = 4;
  59  
  60: 				const map5 = loader.load( 'textures/compressed/disturb_argb_nomip.dds' );
  61  				map5.minFilter = map5.magFilter = THREE.LinearFilter;

  63  
  64: 				const map6 = loader.load( 'textures/compressed/disturb_argb_mip.dds' );
  65  				map6.anisotropy = 4;
  66  
  67: 				const cubemap1 = loader.load( 'textures/compressed/Mountains.dds', function ( texture ) {
  68  

  75  
  76: 				const cubemap2 = loader.load( 'textures/compressed/Mountains_argb_mip.dds', function ( texture ) {
  77  

  84  
  85: 				const cubemap3 = loader.load( 'textures/compressed/Mountains_argb_nomip.dds', function ( texture ) {
  86  

examples\webgl_loader_texture_exr:
  51  					.setDataType( THREE.FloatType )
  52: 					.load( 'textures/memorial.exr', function ( texture, textureData ) {
  53  

examples\webgl_loader_texture_hdr:
  51  					.setDataType( THREE.UnsignedByteType ) // alt: FloatType, HalfFloatType
  52: 					.load( 'textures/memorial.hdr', function ( texture, textureData ) {
  53  

examples\webgl_loader_texture_ktx:
   69  			material1 = new THREE.MeshBasicMaterial( {
   70: 				map: loader.load( 'textures/compressed/disturb_PVR2bpp.ktx' )
   71  			} );
   72  			material2 = new THREE.MeshBasicMaterial( {
   73: 				map: loader.load( 'textures/compressed/lensflare_PVR4bpp.ktx' ),
   74  				depthTest: false,

   86  			material1 = new THREE.MeshBasicMaterial( {
   87: 				map: loader.load( 'textures/compressed/disturb_BC1.ktx' )
   88  			} );
   89  			material2 = new THREE.MeshBasicMaterial( {
   90: 				map: loader.load( 'textures/compressed/lensflare_BC3.ktx' ),
   91  				depthTest: false,

  103  			material1 = new THREE.MeshBasicMaterial( {
  104: 				map: loader.load( 'textures/compressed/disturb_ETC1.ktx' )
  105  			} );

  113  			material1 = new THREE.MeshBasicMaterial( {
  114: 				map: loader.load( 'textures/compressed/disturb_ASTC4x4.ktx' )
  115  			} );
  116  			material2 = new THREE.MeshBasicMaterial( {
  117: 				map: loader.load( 'textures/compressed/lensflare_ASTC8x8.ktx' ),
  118  				depthTest: false,

examples\webgl_loader_texture_ktx2:
  68  				.detectSupport( renderer )
  69: 				.load( './textures/compressed/sample_uastc.ktx2', ( texture ) => {
  70  

examples\webgl_loader_texture_lottie:
  40  				loader.setQuality( 2 );
  41: 				loader.load( 'textures/lottie/24017-lottie-logo-animation', function ( texture ) {
  42  

  44  
  45: 					// texture = new THREE.TextureLoader().load( 'textures/uv_grid_directx' );
  46  

examples\webgl_loader_texture_pvrtc:
  60  
  61: 				const disturb_4bpp_rgb = loader.load( 'textures/compressed/disturb_4bpp_rgb.pvr' );
  62: 				const disturb_4bpp_rgb_v3 = loader.load( 'textures/compressed/disturb_4bpp_rgb_v3.pvr' );
  63: 				const disturb_4bpp_rgb_mips = loader.load( 'textures/compressed/disturb_4bpp_rgb_mips.pvr' );
  64: 				const disturb_2bpp_rgb = loader.load( 'textures/compressed/disturb_2bpp_rgb.pvr' );
  65: 				const flare_4bpp_rgba = loader.load( 'textures/compressed/flare_4bpp_rgba.pvr' );
  66: 				const flare_2bpp_rgba = loader.load( 'textures/compressed/flare_2bpp_rgba.pvr' );
  67: 				const park3_cube_nomip_4bpp_rgb = loader.load( 'textures/compressed/park3_cube_nomip_4bpp_rgb.pvr', onCube1Loaded );
  68: 				const park3_cube_mip_2bpp_rgb_v3 = loader.load( 'textures/compressed/park3_cube_mip_2bpp_rgb_v3.pvr', onCube2Loaded );
  69  

examples\webgl_loader_texture_rgbm:
  46  
  47: 				new THREE.TextureLoader().load( 'textures/memorial', function ( texture ) {
  48  

examples\webgl_loader_texture_tga:
  44  
  45: 				const texture1 = loader.load( 'textures/crate_grey8.tga' );
  46  				const material1 = new THREE.MeshPhongMaterial( { color: 0xffffff, map: texture1 } );

  54  
  55: 				const texture2 = loader.load( 'textures/crate_color8.tga' );
  56  				const material2 = new THREE.MeshPhongMaterial( { color: 0xffffff, map: texture2 } );

examples\webgl_loader_tilt:
  45  				const loader = new TiltLoader();
  46: 				loader.load( './models/tilt/BRUSH_DOME.tilt', function ( object ) {
  47  

examples\webgl_loader_ttf:
  85  
  86: 				loader.load( 'fonts/ttf/kenpixel.ttf', function ( json ) {
  87  

examples\webgl_loader_vox:
  44  				const loader = new VOXLoader();
  45: 				loader.load( 'models/vox/monu10.vox', function ( chunks ) {
  46  

examples\webgl_loader_vrm:
  48  				const loader = new VRMLoader();
  49: 				loader.load( 'models/vrm/Alicia/AliciaSolid.vrm', function ( vrm ) {
  50  

examples\webgl_loader_vrml:
  121  
  122: 				loader.load( 'models/vrml/' + asset + '.wrl', function ( object ) {
  123  

examples\webgl_loader_vtk:
   51  				const loader = new VTKLoader();
   52: 				loader.load( "models/vtk/bunny.vtk", function ( geometry ) {
   53  

   65  				const loader1 = new VTKLoader();
   66: 				loader1.load( 'models/vtk/cube_ascii.vtp', function ( geometry ) {
   67  

   82  				const loader2 = new VTKLoader();
   83: 				loader2.load( 'models/vtk/cube_binary.vtp', function ( geometry ) {
   84  

   99  				const loader3 = new VTKLoader();
  100: 				loader3.load( 'models/vtk/cube_no_compression.vtp', function ( geometry ) {
  101  

examples\webgl_loader_x:
  113  
  114: 			loader.load( [ 'models/xfile/SSR06_model.x' ], function ( object ) {
  115  

  200  				const loader2 = new XLoader( manager );
  201: 				loader2.load( [ 'models/xfile/' + animeName + '.x', { putPos: false, putScl: false } ], function () {
  202  

examples\webgl_loader_xyz:
  40  				const loader = new XYZLoader();
  41: 				loader.load( 'models/xyz/helix_201.xyz', function ( geometry ) {
  42  

examples\webgl_marchingcubes:
  145  
  146: 			const reflectionCube = cubeTextureLoader.load( urls );
  147: 			const refractionCube = cubeTextureLoader.load( urls );
  148  			refractionCube.mapping = THREE.CubeRefractionMapping;

  156  
  157: 			const texture = new THREE.TextureLoader().load( "textures/uv_grid_opengl" );
  158  			texture.wrapS = THREE.RepeatWrapping;

examples\webgl_materials_blending_custom:
  153  
  154: 				const mapBg2 = textureLoader.load( 'textures/disturb' );
  155  				mapBg2.wrapS = mapBg2.wrapT = THREE.RepeatWrapping;

  157  
  158: 				const mapBg3 = textureLoader.load( 'textures/crate.gif' );
  159  				mapBg3.wrapS = mapBg3.wrapT = THREE.RepeatWrapping;

  161  
  162: 				const mapBg4 = textureLoader.load( 'textures/lava/lavatile' );
  163  				mapBg4.wrapS = mapBg4.wrapT = THREE.RepeatWrapping;

  165  
  166: 				const mapBg5 = textureLoader.load( 'textures/water' );
  167  				mapBg5.wrapS = mapBg5.wrapT = THREE.RepeatWrapping;

  169  
  170: 				const mapBg6 = textureLoader.load( 'textures/lava/cloud' );
  171  				mapBg6.wrapS = mapBg6.wrapT = THREE.RepeatWrapping;

  193  
  194: 					const map = textureLoader.load( images[ i ] );
  195  					mapsNoPre.push( map );
  196  
  197: 					const mapPre = textureLoader.load( images[ i ] );
  198  					mapPre.premultiplyAlpha = true;

examples\webgl_materials_blending:
  60  				/*
  61: 				let mapBg = textureLoader.load( 'textures/disturb' );
  62  				mapBg.wrapS = mapBg.wrapT = THREE.RepeatWrapping;

  81  
  82: 				const map0 = textureLoader.load( 'textures/uv_grid_opengl' );
  83: 				const map1 = textureLoader.load( 'textures/sprite0' );
  84: 				const map2 = textureLoader.load( 'textures/sprite0' );
  85: 				const map3 = textureLoader.load( 'textures/lensflare/lensflare0' );
  86: 				const map4 = textureLoader.load( 'textures/lensflare/lensflare0_alpha' );
  87  

examples\webgl_materials_bumpmap:
  81  
  82: 				const mapHeight = new THREE.TextureLoader().load( "models/gltf/LeePerrySmith/Infinite-Level_02_Disp_NoSmoothUV-4096" );
  83  

  92  				loader = new GLTFLoader();
  93: 				loader.load( "models/gltf/LeePerrySmith/LeePerrySmith", function ( gltf ) {
  94  

examples\webgl_materials_car:
  132  
  133: 				const shadow = new THREE.TextureLoader().load( 'models/gltf/ferrari_ao' );
  134  

  140  
  141: 				loader.load( 'models/gltf/ferrari', function ( gltf ) {
  142  

examples\webgl_materials_channels:
  121  				const textureLoader = new THREE.TextureLoader();
  122: 				const normalMap = textureLoader.load( "models/obj/ninja/normal" );
  123: 				const aoMap = textureLoader.load( "models/obj/ninja/ao" );
  124: 				const displacementMap = textureLoader.load( "models/obj/ninja/displacement" );
  125  

  183  				const loader = new OBJLoader();
  184: 				loader.load( "models/obj/ninja/ninjaHead_Low", function ( group ) {
  185  

examples\webgl_materials_cubemap_balls_reflection:
  46  					.setPath( 'textures/cube/pisa/' )
  47: 					.load( [ 'px', 'nx', 'py', 'ny', 'pz', 'nz' ] );
  48  

examples\webgl_materials_cubemap_balls_refraction:
  45  					.setPath( 'textures/cube/Park3Med/' )
  46: 					.load( [ 'px', 'nx', 'py', 'ny', 'pz', 'nz' ] );
  47  

examples\webgl_materials_cubemap_dynamic:
  33  
  34: 			textureLoader.load( 'textures/2294472375_24a3b8ef46_o', function ( texture ) {
  35  

examples\webgl_materials_cubemap_mipmaps:
  42  
  43: 						new THREE.CubeTextureLoader().load( urls, function ( cubeTexture ) {
  44  

examples\webgl_materials_cubemap_refraction:
  56  
  57: 				const textureCube = new THREE.CubeTextureLoader().load( urls );
  58  				textureCube.mapping = THREE.CubeRefractionMapping;

  95  				const loader = new PLYLoader();
  96: 				loader.load( 'models/ply/binary/Lucy100k.ply', function ( geometry ) {
  97  

examples\webgl_materials_cubemap:
  51  
  52: 				const reflectionCube = new THREE.CubeTextureLoader().load( urls );
  53: 				const refractionCube = new THREE.CubeTextureLoader().load( urls );
  54  				refractionCube.mapping = THREE.CubeRefractionMapping;

  74  				objLoader.setPath( 'models/obj/walt/' );
  75: 				objLoader.load( 'WaltHead', function ( object ) {
  76  

examples\webgl_materials_curvature:
  138  				//load the obj
  139: 				loader.load( 'models/obj/ninja/ninjaHead_Low', function ( object ) {
  140  

examples\webgl_materials_displacementmap:
  150  
  151: 				const reflectionCube = new THREE.CubeTextureLoader().load( urls );
  152  				reflectionCube.encoding = THREE.sRGBEncoding;

  156  				const textureLoader = new THREE.TextureLoader();
  157: 				const normalMap = textureLoader.load( "models/obj/ninja/normal" );
  158: 				const aoMap = textureLoader.load( "models/obj/ninja/ao" );
  159: 				const displacementMap = textureLoader.load( "models/obj/ninja/displacement" );
  160  

  188  				const loader = new OBJLoader();
  189: 				loader.load( "models/obj/ninja/ninjaHead_Low", function ( group ) {
  190  

examples\webgl_materials_envmaps_exr:
  80  					.setDataType( THREE.UnsignedByteType )
  81: 					.load( 'textures/piz_compressed.exr', function ( texture ) {
  82  

  89  
  90: 				new THREE.TextureLoader().load( 'textures/equirectangular', function ( texture ) {
  91  

examples\webgl_materials_envmaps_hdr_nodes:
  134  					.setDataType( THREE.UnsignedByteType )
  135: 					.load( hdrUrls, function () {
  136  

  146  					.setPath( './textures/cube/pisa/' )
  147: 					.load( ldrUrls, function () {
  148  

  158  					.setPath( './textures/cube/pisaRGBM16/' )
  159: 					.load( rgbmUrls, function () {
  160  

examples\webgl_materials_envmaps_hdr:
  128  					.setDataType( THREE.UnsignedByteType )
  129: 					.load( hdrUrls, function () {
  130  

  140  					.setPath( './textures/cube/pisa/' )
  141: 					.load( ldrUrls, function () {
  142  

  152  					.setPath( './textures/cube/pisaRGBM16/' )
  153: 					.load( rgbmUrls, function () {
  154  

examples\webgl_materials_envmaps_parallax:
  261  				const loader = new THREE.TextureLoader();
  262: 				const rMap = loader.load( 'textures/lava/lavatile' );
  263  				rMap.wrapS = THREE.RepeatWrapping;

  306  				// walls
  307: 				const diffuseTex = loader.load( 'textures/brick_diffuse', function () {
  308  

  311  				} );
  312: 				const bumpTex = loader.load( 'textures/brick_bump', function () {
  313  

examples\webgl_materials_envmaps_pmrem_nodes:
  109  					.setDataType( THREE.UnsignedByteType )
  110: 					.load( hdrUrls, function () {
  111  

examples\webgl_materials_envmaps:
  51  
  52: 				textureCube = loader.load( [ 'posx', 'negx', 'posy', 'negy', 'posz', 'negz' ] );
  53  				textureCube.encoding = THREE.sRGBEncoding;

  56  
  57: 				textureEquirec = textureLoader.load( 'textures/2294472375_24a3b8ef46_o' );
  58  				textureEquirec.mapping = THREE.EquirectangularReflectionMapping;

examples\webgl_materials_lightmap:
  128  				const loader = new THREE.ObjectLoader();
  129: 				loader.load( "models/json/lightmap/lightmap", function ( object ) {
  130  

examples\webgl_materials_matcap:
  67  
  68: 				const matcap = loaderEXR.load( 'textures/matcaps/040full.exr' );
  69  

  72  
  73: 				const normalmap = loader.load( 'models/gltf/LeePerrySmith/Infinite-Level_02_Tangent_SmoothUV' );
  74  
  75  				// model
  76: 				new GLTFLoader( manager ).load( 'models/gltf/LeePerrySmith/LeePerrySmith', function ( gltf ) {
  77  

examples\webgl_materials_modified:
  37  				const loader = new GLTFLoader();
  38: 				loader.load( 'models/gltf/LeePerrySmith/LeePerrySmith', function ( gltf ) {
  39  

examples\webgl_materials_nodes:
   59  
   60: 					texture = textures[ name ].texture = new THREE.TextureLoader().load( textures[ name ].url );
   61  					texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  105  
  106: 				const textureCube = new THREE.CubeTextureLoader().load( urls, updatePREM );
  107  

examples\webgl_materials_normalmap_object_space:
  60  				// model
  61: 				new GLTFLoader().load( 'models/gltf/Nefertiti/Nefertiti', function ( gltf ) {
  62  

examples\webgl_materials_normalmap:
  79  
  80: 				const diffuseMap = textureLoader.load( "models/gltf/LeePerrySmith/Map-COL" );
  81  				diffuseMap.encoding = THREE.sRGBEncoding;
  82  
  83: 				const specularMap = textureLoader.load( "models/gltf/LeePerrySmith/Map-SPEC" );
  84  				specularMap.encoding = THREE.sRGBEncoding;
  85  
  86: 				const normalMap = textureLoader.load( "models/gltf/LeePerrySmith/Infinite-Level_02_Tangent_SmoothUV" );
  87  

  98  				loader = new GLTFLoader();
  99: 				loader.load( "models/gltf/LeePerrySmith/LeePerrySmith", function ( gltf ) {
  100  

examples\webgl_materials_parallaxmap:
  65  				material = new THREE.ShaderMaterial( parameters );
  66: 				material.map = textureLoader.load( 'textures/brick_diffuse' );
  67: 				material.bumpMap = textureLoader.load( 'textures/brick_bump' );
  68  				material.map.anisotropy = 4;

examples\webgl_materials_physical_clearcoat:
  50  					.setPath( 'textures/cube/pisaHDR/' )
  51: 					.load( [ 'px.hdr', 'nx.hdr', 'py.hdr', 'ny.hdr', 'pz.hdr', 'nz.hdr' ],
  52  						function ( hdrCubeMap ) {

  61  
  62: 							const diffuse = textureLoader.load( "textures/carbon/Carbon" );
  63  							diffuse.encoding = THREE.sRGBEncoding;

  68  
  69: 							const normalMap = textureLoader.load( "textures/carbon/Carbon_Normal" );
  70  							normalMap.wrapS = THREE.RepeatWrapping;

  72  
  73: 							const normalMap2 = textureLoader.load( "textures/water/Water_1_M_Normal" );
  74  

  81  
  82: 							const normalMap4 = textureLoader.load( "textures/golfball" );
  83  
  84: 							const clearcoatNormaMap = textureLoader.load( "textures/pbr/Scratched_gold/Scratched_gold_01_1K_Normal" );
  85  

examples\webgl_materials_physical_reflectivity:
   91  				const loader = new OBJLoader( manager );
   92: 				loader.load( 'models/obj/emerald', function ( object ) {
   93  

  118  					.setPath( 'textures/equirectangular/' )
  119: 					.load( 'royal_esplanade_1k.hdr', function ( hdrEquirect ) {
  120  

examples\webgl_materials_physical_sheen:
  44  			// model
  45: 			new FBXLoader().load( 'models/fbx/cloth.fbx', function ( loadedModel ) {
  46  

examples\webgl_materials_physical_transmission:
  40  				.setPath( 'textures/equirectangular/' )
  41: 				.load( 'royal_esplanade_1k.hdr', function () {
  42  

examples\webgl_materials_shaders_fresnel:
  55  
  56: 				const textureCube = new THREE.CubeTextureLoader().load( urls );
  57  

examples\webgl_materials_standard:
   67  					.setPath( 'models/obj/cerberus/' )
   68: 					.load( 'Cerberus', function ( group ) {
   69  

   75  
   76: 						const diffuseMap = loader.load( 'Cerberus_A' );
   77  						diffuseMap.encoding = THREE.sRGBEncoding;

   79  						// roughness is in G channel, metalness is in B channel
   80: 						material.metalnessMap = material.roughnessMap = loader.load( 'Cerberus_RM' );
   81: 						material.normalMap = loader.load( 'Cerberus_N' );
   82  

  106  					.setPath( 'textures/equirectangular/' )
  107: 					.load( 'venice_sunset_1k.hdr', function ( hdrEquirect ) {
  108  

examples\webgl_materials_subsurface_scattering:
   89  			const loader = new THREE.TextureLoader();
   90: 			const imgTexture = loader.load( 'models/fbx/white' );
   91: 			const thicknessTexture = loader.load( 'models/fbx/bunny_thickness' );
   92  			imgTexture.wrapS = imgTexture.wrapT = THREE.RepeatWrapping;

  120  			const loaderFBX = new FBXLoader();
  121: 			loaderFBX.load( 'models/fbx/stanford-bunny.fbx', function ( object ) {
  122  

examples\webgl_materials_texture_anisotropy:
  114  
  115: 				const texture1 = textureLoader.load( "textures/crate.gif" );
  116  				const material1 = new THREE.MeshPhongMaterial( { color: 0xffffff, map: texture1 } );

  121  
  122: 				const texture2 = textureLoader.load( "textures/crate.gif" );
  123  				const material2 = new THREE.MeshPhongMaterial( { color: 0xffffff, map: texture2 } );

examples\webgl_materials_texture_filters:
  166  
  167: 				const texturePainting = new THREE.TextureLoader().load( "textures/758px-Canestra_di_frutta_(Caravaggio)", callbackPainting );
  168  				const texturePainting2 = new THREE.Texture();

examples\webgl_materials_texture_manualmipmap:
  180  
  181: 				const texturePainting1 = new THREE.TextureLoader().load( "textures/758px-Canestra_di_frutta_(Caravaggio)", callbackPainting );
  182  				const texturePainting2 = new THREE.Texture();

examples\webgl_materials_texture_partialupdate:
  37  				const loader = new THREE.TextureLoader();
  38: 				diffuseMap = loader.load( 'textures/floors/FloorsCheckerboard_S_Diffuse', animate );
  39  				diffuseMap.minFilter = THREE.LinearFilter;

examples\webgl_materials_texture_rotation:
  58  
  59: 				new THREE.TextureLoader().load( 'textures/uv_grid_opengl', function ( texture ) {
  60  

examples\webgl_materials_variations_basic:
  27  			const loader = new THREE.FontLoader();
  28: 			loader.load( 'fonts/gentilis_regular.typeface', function ( font ) {
  29  

  46  					.setPath( 'textures/cube/SwedishRoyalCastle/' )
  47: 					.load( [ 'px', 'nx', 'py', 'ny', 'pz', 'nz' ] );
  48  				reflectionCube.encoding = THREE.sRGBEncoding;

  54  
  55: 				let imgTexture = new THREE.TextureLoader().load( "textures/planets/moon_1024" );
  56  				imgTexture.wrapS = imgTexture.wrapT = THREE.RepeatWrapping;

examples\webgl_materials_variations_lambert:
  27  			const loader = new THREE.FontLoader();
  28: 			loader.load( 'fonts/gentilis_regular.typeface', function ( font ) {
  29  

  46  					.setPath( 'textures/cube/SwedishRoyalCastle/' )
  47: 					.load( [ 'px', 'nx', 'py', 'ny', 'pz', 'nz' ] );
  48  				reflectionCube.encoding = THREE.sRGBEncoding;

  54  
  55: 				let imgTexture = new THREE.TextureLoader().load( "textures/planets/moon_1024" );
  56  				imgTexture.wrapS = imgTexture.wrapT = THREE.RepeatWrapping;

examples\webgl_materials_variations_phong:
  27  			const loader = new THREE.FontLoader();
  28: 			loader.load( 'fonts/gentilis_regular.typeface', function ( font ) {
  29  

  46  					.setPath( 'textures/cube/SwedishRoyalCastle/' )
  47: 					.load( [ 'px', 'nx', 'py', 'ny', 'pz', 'nz' ] );
  48  				reflectionCube.encoding = THREE.sRGBEncoding;

  54  
  55: 				let imgTexture = new THREE.TextureLoader().load( "textures/planets/moon_1024" );
  56  				imgTexture.wrapS = imgTexture.wrapT = THREE.RepeatWrapping;

examples\webgl_materials_variations_physical:
  29  			const loader = new THREE.FontLoader();
  30: 			loader.load( 'fonts/gentilis_regular.typeface', function ( font ) {
  31  

  53  					.setPath( 'textures/equirectangular/' )
  54: 					.load( 'pedestrian_overpass_1k.hdr', function ( hdrEquirect ) {
  55  

examples\webgl_materials_variations_standard:
  29  			const loader = new THREE.FontLoader();
  30: 			loader.load( 'fonts/gentilis_regular.typeface', function ( font ) {
  31  

  50  
  51: 				let imgTexture = new THREE.TextureLoader().load( "textures/planets/moon_1024" );
  52  				imgTexture.wrapS = imgTexture.wrapT = THREE.RepeatWrapping;

  58  					.setPath( 'textures/equirectangular/' )
  59: 					.load( 'pedestrian_overpass_1k.hdr', function ( hdrEquirect ) {
  60  

examples\webgl_materials_variations_toon:
  28  			const loader = new THREE.FontLoader();
  29: 			loader.load( 'fonts/gentilis_regular.typeface', function ( font ) {
  30  

examples\webgl_materials_wireframe:
  80  
  81: 				new THREE.BufferGeometryLoader().load( 'models/json/WaltHeadLo_buffergeometry', function ( geometry ) {
  82  

examples\webgl_mirror_nodes:
  53  
  54: 			const decalNormal = new THREE.TextureLoader().load( 'textures/decal/decal-normal' );
  55  
  56: 			const decalDiffuse = new THREE.TextureLoader().load( 'textures/decal/decal-diffuse' );
  57  			decalDiffuse.wrapS = decalDiffuse.wrapT = THREE.RepeatWrapping;

examples\webgl_modifier_curve_instanced:
  113  
  114: 				loader.load( "fonts/helvetiker_regular.typeface", function (
  115  					font

examples\webgl_modifier_curve:
  100  
  101: 				loader.load( "fonts/helvetiker_regular.typeface", function (
  102  					font

examples\webgl_modifier_edgesplit:
  61  
  62: 				new OBJLoader().load(
  63  					'./models/obj/cerberus/Cerberus',

examples\webgl_modifier_simplifier:
  53  
  54: 				new GLTFLoader().load( "models/gltf/LeePerrySmith/LeePerrySmith", function ( gltf ) {
  55  

examples\webgl_modifier_subdivision:
  60  				const loader = new THREE.BufferGeometryLoader();
  61: 				loader.load( 'models/json/WaltHeadLo_buffergeometry', function ( bufferGeometry ) {
  62  

examples\webgl_modifier_tessellation:
  74  			const loader = new THREE.FontLoader();
  75: 			loader.load( 'fonts/helvetiker_bold.typeface', function ( font ) {
  76  

examples\webgl_morphtargets_horse:
  67  				const loader = new GLTFLoader();
  68: 				loader.load( "models/gltf/Horse", function ( gltf ) {
  69  

examples\webgl_morphtargets_sphere:
  54  				const loader = new GLTFLoader();
  55: 				loader.load( 'models/gltf/AnimatedMorphSphere/glTF/AnimatedMorphSphere.gltf', function ( gltf ) {
  56  

  76  						sizeAttenuation: false,
  77: 						map: new THREE.TextureLoader().load( 'textures/sprites/disc' ),
  78  						alphaTest: 0.5,

examples\webgl_nearestneighbour:
   82  
   83: 				const cubeTexture = cubeTextureLoader.load( [
   84  					'px', 'nx',

  107  
  108: 				const imagePreviewTexture = textureLoader.load( 'textures/crate.gif' );
  109  

examples\webgl_panorama_equirectangular:
  43  
  44: 				const texture = new THREE.TextureLoader().load( 'textures/2294472375_24a3b8ef46_o' );
  45  				const material = new THREE.MeshBasicMaterial( { map: texture } );

examples\webgl_performance_nodes:
  180  				const loader = new THREE.BufferGeometryLoader();
  181: 				loader.load( 'models/json/suzanne_buffergeometry', function ( geo ) {
  182  

examples\webgl_performance_static:
  51  				const loader = new THREE.BufferGeometryLoader();
  52: 				loader.load( 'models/json/suzanne_buffergeometry', function ( geometry ) {
  53  

examples\webgl_performance:
  54  				const loader = new THREE.BufferGeometryLoader();
  55: 				loader.load( 'models/json/suzanne_buffergeometry', function ( geometry ) {
  56  

examples\webgl_pmrem_test:
  132  					.setPath( 'textures/equirectangular/' )
  133: 					.load( 'spot1Lux.hdr', function ( texture ) {
  134  

examples\webgl_points_billboards:
  42  
  43: 				const sprite = new THREE.TextureLoader().load( 'textures/sprites/disc' );
  44  

examples\webgl_points_dynamic:
  61  
  62: 				loader.load( 'models/obj/male02/male02', function ( object ) {
  63  

  72  
  73: 				loader.load( 'models/obj/female02/female02', function ( object ) {
  74  

examples\webgl_points_sprites:
  47  
  48: 				const sprite1 = textureLoader.load( 'textures/sprites/snowflake1' );
  49: 				const sprite2 = textureLoader.load( 'textures/sprites/snowflake2' );
  50: 				const sprite3 = textureLoader.load( 'textures/sprites/snowflake3' );
  51: 				const sprite4 = textureLoader.load( 'textures/sprites/snowflake4' );
  52: 				const sprite5 = textureLoader.load( 'textures/sprites/snowflake5' );
  53  

examples\webgl_postprocessing_3dlut:
  67  					.setPath( 'textures/equirectangular/' )
  68: 					.load( 'royal_esplanade_1k.hdr', function ( texture ) {
  69  

  80  						const loader = new GLTFLoader().setPath( 'models/gltf/DamagedHelmet/glTF/' );
  81: 						loader.load( 'DamagedHelmet.gltf', function ( gltf ) {
  82  

  91  					new LUTCubeLoader()
  92: 						.load( 'luts/' + name, function ( result ) {
  93  

examples\webgl_postprocessing_advanced:
   85  				const loader = new GLTFLoader();
   86: 				loader.load( "models/gltf/LeePerrySmith/LeePerrySmith", function ( gltf ) {
   87  

   93  
   94: 				const diffuseMap = new THREE.TextureLoader().load( "textures/cube/SwedishRoyalCastle/pz" );
   95  				diffuseMap.encoding = THREE.sRGBEncoding;

  286  
  287: 				const diffuseMap = new THREE.TextureLoader().load( "models/gltf/LeePerrySmith/Map-COL" );
  288  				diffuseMap.encoding = THREE.sRGBEncoding;

  295  					map: diffuseMap,
  296: 					normalMap: new THREE.TextureLoader().load( "models/gltf/LeePerrySmith/Infinite-Level_02_Tangent_SmoothUV" ),
  297  					normalScale: new THREE.Vector2( 0.75, 0.75 )

examples\webgl_postprocessing_backgrounds:
  155  				const textureLoader = new THREE.TextureLoader();
  156: 				textureLoader.load( "textures/hardwood2_diffuse", function ( map ) {
  157  

  164  				const ldrUrls = genCubeUrls( "textures/cube/pisa/", "" );
  165: 				new THREE.CubeTextureLoader().load( ldrUrls, function ( ldrCubeMap ) {
  166  

examples\webgl_postprocessing_crossfade:
  243  				for ( let i = 0; i < 6; i ++ )
  244: 					this.textures[ i ] = loader.load( 'textures/transition/transition' + ( i + 1 ) + '' );
  245  

examples\webgl_postprocessing_dof:
  68  
  69: 				const textureCube = new THREE.CubeTextureLoader().load( urls );
  70  

examples\webgl_postprocessing_dof2:
   85  
   86: 				const textureCube = new THREE.CubeTextureLoader().load( urls );
   87  

  122  				const loader2 = new THREE.BufferGeometryLoader();
  123: 				loader2.load( 'models/json/suzanne_buffergeometry', function ( geometry ) {
  124  

examples\webgl_postprocessing_godrays:
  67  				const loader = new OBJLoader();
  68: 				loader.load( 'models/obj/tree', function ( object ) {
  69  

examples\webgl_postprocessing_masking:
  59  
  60: 				const texture1 = new THREE.TextureLoader().load( 'textures/758px-Canestra_di_frutta_(Caravaggio)' );
  61  				texture1.minFilter = THREE.LinearFilter;
  62: 				const texture2 = new THREE.TextureLoader().load( 'textures/2294472375_24a3b8ef46_o' );
  63  

examples\webgl_postprocessing_nodes_pass:
  34  
  35: 			const lensflare2 = textureLoader.load( 'textures/lensflare/lensflare0' );
  36  			lensflare2.wrapS = lensflare2.wrapT = THREE.RepeatWrapping;
  37  
  38: 			const decalNormal = textureLoader.load( 'textures/decal/decal-normal' );
  39  			decalNormal.wrapS = decalNormal.wrapT = THREE.RepeatWrapping;

examples\webgl_postprocessing_nodes:
  31  
  32: 			const lensflare2 = textureLoader.load( 'textures/lensflare/lensflare0' );
  33  			lensflare2.wrapS = lensflare2.wrapT = THREE.RepeatWrapping;
  34  
  35: 			const decalNormal = textureLoader.load( 'textures/decal/decal-normal' );
  36  			decalNormal.wrapS = decalNormal.wrapT = THREE.RepeatWrapping;

examples\webgl_postprocessing_outline:
  166  				const loader = new OBJLoader( manager );
  167: 				loader.load( 'models/obj/tree', function ( object ) {
  168  

  250  				const textureLoader = new THREE.TextureLoader();
  251: 				textureLoader.load( 'textures/tri_pattern', function ( texture ) {
  252  

examples\webgl_postprocessing_smaa:
  56  
  57: 				const texture = new THREE.TextureLoader().load( "textures/brick_diffuse" );
  58  				texture.anisotropy = 4;

examples\webgl_postprocessing_taa:
  109  
  110: 				const texture = new THREE.TextureLoader().load( "textures/brick_diffuse" );
  111  				texture.minFilter = THREE.NearestFilter;

examples\webgl_postprocessing_unreal_bloom:
  93  
  94: 				new GLTFLoader().load( 'models/gltf/PrimaryIonDrive', function ( gltf ) {
  95  

examples\webgl_refraction:
  68  
  69: 				const dudvMap = new THREE.TextureLoader().load( 'textures/waterdudv', function () {
  70  

examples\webgl_sandbox:
  54  				const texture1 = new THREE.CanvasTexture( generateTexture( 0, 0.5, 1 ), THREE.UVMapping );
  55: 				const texture2 = new THREE.TextureLoader().load( 'textures/land_ocean_ice_cloud_2048' );
  56  

examples\webgl_shader_lava:
  111  					"uvScale": { value: new THREE.Vector2( 3.0, 1.0 ) },
  112: 					"texture1": { value: textureLoader.load( 'textures/lava/cloud' ) },
  113: 					"texture2": { value: textureLoader.load( 'textures/lava/lavatile' ) }
  114  

examples\webgl_shader2:
  167  					"time": { value: 1.0 },
  168: 					"colorTexture": { value: new THREE.TextureLoader().load( 'textures/disturb' ) }
  169  				};

examples\webgl_shaders_ocean:
  64  						textureHeight: 512,
  65: 						waterNormals: new THREE.TextureLoader().load( 'textures/waternormals', function ( texture ) {
  66  

examples\webgl_shaders_tonemapping:
  190  
  191: 				textureLoader.load( 'textures/planets/earth_atmos_4096', function ( tex ) {
  192  

  197  				} );
  198: 				textureLoader.load( 'textures/planets/earth_specular_2048', function ( tex ) {
  199  

  205  
  206: 				// let earthNormal = textureLoader.load( 'textures/planets/earth-new-normal-2048', function( tex ) {
  207  				// 	earthMat.normalMap = tex;

  210  
  211: 				const earthLights = textureLoader.load( 'textures/planets/earth_lights_2048' );
  212  				earthLights.encoding = THREE.sRGBEncoding;

  222  
  223: 				const clouds = textureLoader.load( 'textures/planets/earth_clouds_2048' );
  224  				clouds.encoding = THREE.sRGBEncoding;

  314  
  315: 				const textureCube = new THREE.CubeTextureLoader().load( urls );
  316  				textureCube.encoding = THREE.sRGBEncoding;

examples\webgl_shaders_vector:
  75  			const loader = new THREE.FontLoader();
  76: 			loader.load( 'fonts/helvetiker_regular.typeface', function ( font ) {
  77  

examples\webgl_shading_physical:
   82  
   83: 				const textureSquares = textureLoader.load( "textures/patterns/bright_squares256" );
   84  				textureSquares.repeat.set( 50, 50 );

   88  
   89: 				const textureNoiseColor = textureLoader.load( "textures/disturb" );
   90  				textureNoiseColor.repeat.set( 1, 1 );

   93  
   94: 				const textureLava = textureLoader.load( "textures/lava/lavatile" );
   95  				textureLava.repeat.set( 6, 2 );

  186  
  187: 				loader.load( "models/gltf/SittingBox", function ( gltf ) {
  188  

examples\webgl_shadowmap_performance:
  157  				const loader = new THREE.FontLoader();
  158: 				loader.load( 'fonts/helvetiker_bold.typeface', function ( font ) {
  159  

  276  				const gltfLoader = new GLTFLoader();
  277: 				gltfLoader.load( "models/gltf/Horse", function ( gltf ) {
  278  

examples\webgl_shadowmap:
  187  				const loader = new THREE.FontLoader();
  188: 				loader.load( 'fonts/helvetiker_bold.typeface', function ( font ) {
  189  

  278  
  279: 				gltfloader.load( "models/gltf/Horse", function ( gltf ) {
  280  

  294  
  295: 				gltfloader.load( "models/gltf/Flamingo", function ( gltf ) {
  296  

  303  
  304: 				gltfloader.load( "models/gltf/Stork", function ( gltf ) {
  305  

  312  
  313: 				gltfloader.load( "models/gltf/Parrot", function ( gltf ) {
  314  

examples\webgl_skinning_simple:
  96  			const loader = new GLTFLoader();
  97: 			loader.load('./models/gltf/SimpleSkinning.gltf', function (gltf) {
  98  				scene.add(gltf.scene);

examples\webgl_sprites_nodes:
  76  
  77: 				walkingManTexture = new THREE.TextureLoader().load( walkingManTextureURL );
  78  				walkingManTexture.wrapS = walkingManTexture.wrapT = THREE.RepeatWrapping;

examples\webgl_sprites:
  53  
  54: 				textureLoader.load( "textures/sprite0", createHUDSprites );
  55: 				const mapB = textureLoader.load( "textures/sprite1" );
  56: 				mapC = textureLoader.load( "textures/sprite2" );
  57  

examples\webgl_tiled_forward:
  356  
  357: 			loader.load( 'models/obj/walt/WaltHead', function ( object ) {
  358  

examples\webgl_water_flowmap:
  49  				const textureLoader = new THREE.TextureLoader();
  50: 				textureLoader.load( 'textures/floors/FloorsCheckerboard_S_Diffuse', function ( map ) {
  51  

  63  				const waterGeometry = new THREE.PlaneBufferGeometry( 20, 20 );
  64: 				const flowMap = textureLoader.load( 'textures/water/Water_1_M_Flow' );
  65  

examples\webgl_water:
   72  				const textureLoader = new THREE.TextureLoader();
   73: 				textureLoader.load( 'textures/hardwood2_diffuse', function ( map ) {
   74  

  104  
  105: 				const cubeTexture = cubeTextureLoader.load( [
  106  					"posx", "negx",

examples\webgl2_buffergeometry_attributes_integer:
  124  
  125: 				const map1 = loader.load( 'textures/crate.gif' );
  126: 				const map2 = loader.load( 'textures/floors/FloorsCheckerboard_S_Diffuse' );
  127: 				const map3 = loader.load( 'textures/terrain/grasslight-big' );
  128  

examples\webgl2_materials_texture2darray:
  92  					.setResponseType( 'arraybuffer' )
  93: 					.load( 'textures/3d/head256x256x109.zip', function ( data ) {
  94  

examples\webgl2_materials_texture3d:
  80  			// Load the data ...
  81: 			new NRRDLoader().load( "models/nrrd/stent.nrrd", function ( volume ) {
  82  

  94  				cmtextures = {
  95: 					viridis: new THREE.TextureLoader().load( 'textures/cm_viridis', render ),
  96: 					gray: new THREE.TextureLoader().load( 'textures/cm_gray', render )
  97  				};

examples\webgl2_volume_instancing:
  162  				var loader = new VOXLoader();
  163: 				loader.load( 'models/vox/menger.vox', function ( chunks ) {
  164  

examples\webgpu_rtt:
  49  				const loader = new THREE.TextureLoader();
  50: 				const texture = loader.load( './textures/uv_grid_opengl' );
  51  

examples\webgpu_sandbox:
  46  				const textureLoader = new THREE.TextureLoader();
  47: 				const texture = textureLoader.load( './textures/uv_grid_opengl' );
  48  

  67  				const ddsLoader = new DDSLoader();
  68: 				const dxt5Texture = ddsLoader.load( './textures/compressed/explosion_dxt5_mip.dds' );
  69  

examples\webxr_vr_panorama_depth:
  57  
  58: 				loader.load( './textures/kandao3', function ( texture ) {
  59  

  65  
  66: 				loader.load( './textures/kandao3_depthmap', function ( depth ) {
  67  

examples\webxr_vr_panorama:
  84  				const loader = new THREE.ImageLoader();
  85: 				loader.load( atlasImgUrl, function ( imageObj ) {
  86  

examples\webxr_vr_sandbox:
  28  					.setPath( 'textures/cube/MilkyWay/' )
  29: 					.load( [ 'dark-s_px', 'dark-s_nx', 'dark-s_py', 'dark-s_ny', 'dark-s_pz', 'dark-s_nz' ] );
  30  

  78  				const loader = new THREE.TextureLoader();
  79: 				const texture0 = loader.load( "textures/lensflare/lensflare0" );
  80: 				const texture3 = loader.load( "textures/lensflare/lensflare3" );
  81  

examples\webxr_vr_sculpt:
  148  
  149: 				let reflectionCube = new CubeTextureLoader().load( urls );
  150  				*/
