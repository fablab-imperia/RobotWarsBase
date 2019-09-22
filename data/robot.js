/* eslint-disable */

// define devices and controls //
var arcadeDrive, motorMotor;
var driveStick, weaponSlider, weaponButton, reverseButton, weapon;

// this is run once //
function setup () {
  // setup hardware interface //
  arcadeDrive = new ArcadeDrive()
  weaponMotor = new Motor('weaponMotor')

  weapon = new DigitalOutput('weapon')

  // create the drive joystick //
  driveStick = new Joystick('drive')
  driveStick.position.x = 20  // positions + sizes in % of screen size //
  driveStick.position.y = 50
  driveStick.radius = 15

  // weapon power //
  weaponSlider = new Slider('weapon motor')
  weaponSlider.position.x = 85
  weaponSlider.position.y = 20
  weaponSlider.radius = 5
  weaponSlider.length = 30
  weaponSlider.type = Slider.VERTICAL
  weaponSlider.sticky = true
  weaponSlider.style = 'red'

  // drive direction buttons //
  reverseButton = new Button('reverse')
  reverseButton.position.x = 60
  reverseButton.position.y = 30
  reverseButton.radius = 5
  reverseButton.sticky = true
  reverseButton.style = 'blue'
 // reverseButton.groupName = 'weaponGroup'

  weaponButton = new Button('weapon')
  weaponButton.position.x = 60
  weaponButton.position.y = 70
  weaponButton.radius = 5
  weaponButton.sticky = true
  weaponButton.style = '#FFA726'
  //weaponButton.groupName = 'weaponGroup'
  weaponButton.pressed = true
}

// this is run at update rate //
function loop () {
  // handle driving //
  var speed = driveStick.y
  var rotation = driveStick.x
  arcadeDrive.setSpeedAndRotation(speed, rotation)
  
  // handle weapon control //
  weaponMotor.set(weaponSlider.value)

  // handle driving reverse //
  if (reverseButton.pressed) {
    arcadeDrive.leftMotor.reversed = true
    arcadeDrive.rightMotor.reversed = true
    arcadeDrive.swapMotors = true
  } else {
    arcadeDrive.leftMotor.reversed = false
    arcadeDrive.rightMotor.reversed = false
    arcadeDrive.swapMotors = false
  }

  if (weaponButton.pressed){
    weapon.set(1);
  } 
  else 
  {
    weapon.set(0);
  }


}

