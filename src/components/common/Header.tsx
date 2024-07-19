import useIsMobile from '../../hooks/useIsMobile';
import { CustomScrollStateType } from '../../types/canvas';

export function Header({ scrollState }: CustomScrollStateType) {
  const isMobile = useIsMobile();

  const isSelected = () => {
    if (scrollState <= 3 / 4) {
      return 'INFO';
    } else if (scrollState <= 6 / 4) {
      return 'SKILLS';
    } else if (scrollState <= 11 / 4) {
      return 'WORKS';
    } else {
      return 'CONTACT';
    }
  };

  return (
    <div
      className="html-header"
      style={{
        display: 'flex',
        alignItems: 'center',
        backdropFilter: 'blur(4px)',
      }}
    >
      <h1
        className="cursor-pointer mobile:!text-[1.2rem]"
        onClick={() => {
          window.location.replace(window.location.origin);
        }}
      >
        hyeoz
      </h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: isMobile ? 12 : 48,
          fontFamily: 'IBM Plex Sans KR',
          fontWeight: 700,
          fontSize: isMobile ? '1rem' : '1.5rem',
          padding: isMobile ? '4px 10px' : '8px 48px',
          borderRadius: '32px',
          margin: '0 auto',
        }}
        className="!z-[990]"
      >
        <p
          className="transition ease-in-out delay-150"
          style={{
            color: isSelected() === 'INFO' ? '#000' : '#666',
            fontWeight: isSelected() === 'INFO' ? 700 : 500,
          }}
        >
          INFO
        </p>
        <p
          className="transition ease-in-out delay-150"
          style={{
            color: isSelected() === 'SKILLS' ? '#000' : '#666',
            fontWeight: isSelected() === 'SKILLS' ? 700 : 500,
          }}
        >
          SKILLS
        </p>
        <p
          className="transition ease-in-out delay-150"
          style={{
            color: isSelected() === 'WORKS' ? '#000' : '#666',
            fontWeight: isSelected() === 'WORKS' ? 700 : 500,
          }}
        >
          WORKS
        </p>
        <p
          className="transition ease-in-out delay-150"
          style={{
            color: isSelected() === 'CONTACT' ? '#000' : '#666',
            fontWeight: isSelected() === 'CONTACT' ? 700 : 500,
          }}
        >
          CONTACT
        </p>
      </div>
    </div>
  );
}
