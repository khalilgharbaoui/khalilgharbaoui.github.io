window.onload=function(){document.addEventListener("tizenhwkey",function(t){"back"==t.keyName&&tizen.application.getCurrentApplication().exit()})},Game.Menu=function(t){},Game.Menu.prototype={create:function(){if(game.add.sprite(2,5,"title"),game.add.text(Math.floor(w/2)+0,100,"Jump as high as possible",{font:"24px Arial",fill:"#fff",align:"center"}).anchor.setTo(.5,.5),this.game.device.desktop)var t="Touch To Start!";else var t="Touch To Start!";label2=game.add.text(Math.floor(w/2)+0,h-50+.5,t,{font:"35px Arial",fill:"#fff",align:"center"}),label2.anchor.setTo(.5,.5),game.add.tween(label2).to({angle:1},300,Phaser.Easing.Linear.None).to({angle:-1},300,Phaser.Easing.Linear.None).loop().start(),this.mario=this.game.add.sprite(w/2,h/2-50,"mario"),this.mario.body.gravity.y=12,this.mario.anchor.setTo(.5,1),this.mario.frame=1,this.platform=this.game.add.sprite(w/2,h/2+150,"platform"),this.platform.anchor.setTo(.5,.5),this.platform.body.immovable=!0,this.cursor=this.game.input.keyboard.createCursorKeys()},update:function(){if(game.physics.collide(this.mario,this.platform),this.mario.body.touching.down&&1==this.mario.scale.y){var t=game.add.tween(this.mario.scale).to({y:.7,x:1.3},150,Phaser.Easing.Linear.None).start();t.onComplete.add(function(){this.mario.scale.setTo(1,1),this.mario.body.velocity.y=-500},this)}(this.cursor.up.isDown||game.input.activePointer.isDown)&&game.state.start("Play")},toggle_sound:function(){0==this.sound_toggle.frame?(this.sound_toggle.frame=1,sound=!1):(this.sound_toggle.frame=0,sound=!0)},shutdown:function(){game.world.removeAll()}};