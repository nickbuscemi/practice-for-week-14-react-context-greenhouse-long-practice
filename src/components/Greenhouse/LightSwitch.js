import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext'

function LightSwitch() {

  const { themeName, setThemeName } = useTheme();

  // Event Handlers for the lightswitch
  const handleDayClick = () => {
    setThemeName('day');
  }
  const handleNightClick = () => {
    setThemeName('night');
  }

  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on" onClick={handleDayClick}>DAY</div>
      <div className="off" onClick={handleNightClick}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;