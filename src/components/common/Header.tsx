import { CustomScrollStateType } from '../../types/canvas';

export function Header({ scrollState, setScrollState }: CustomScrollStateType) {
  const isSelected = () => {
    if (scrollState <= 3 / 4) {
      return 'INFO';
    } else if (scrollState <= 6 / 4) {
      return 'SKILLS';
    } else if (scrollState <= 9 / 4) {
      return 'WORKS';
    } else {
      return 'CONTACT';
    }
  };

  const onClickTab = (tab: string) => {
    switch (tab) {
      case 'INFO':
      default:
    }
  };

  return (
    <div
      className="html-header"
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <h1
        className="cursor-pointer"
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
          gap: 48,
          fontFamily: 'IBM Plex Sans KR',
          fontWeight: 700,
          fontSize: '1.5rem',
          backgroundColor: '#fff',
          padding: '8px 48px',
          borderRadius: '32px',
          margin: '0 auto',
        }}
      >
        <p
          className="transition ease-in-out delay-150"
          style={{
            color: isSelected() === 'INFO' ? '#f6ead5' : '#000',
          }}
          onClick={() => onClickTab('INFO')}
        >
          INFO
        </p>
        <p
          className="transition ease-in-out delay-150"
          style={{
            color: isSelected() === 'SKILLS' ? '#f6d9d5' : '#000',
          }}
        >
          SKILLS
        </p>
        <p
          className="transition ease-in-out delay-150"
          style={{
            color: isSelected() === 'WORKS' ? '#bae1ff' : '#000',
          }}
        >
          WORKS
        </p>
        <p
          className="transition ease-in-out delay-150"
          style={{
            color: isSelected() === 'CONTACT' ? '#c9df8a' : '#000',
          }}
        >
          CONTACT
        </p>
      </div>
    </div>
  );
}
