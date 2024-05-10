interface IconProps extends Props {
  alt?: string;
}

const Arbitrum: React.FC<IconProps> = (props) => {
  return (
    <img
      src="/static/images/icons/arbitrum.svg"
      alt={props.alt ?? "Arbitrum"}
      className={`rounded-full w-8 h-8 ${props.className ?? ""}`}
    />
  );
};

const ArbitrumNova: React.FC<IconProps> = (props) => {
  return (
    <img
      src="/static/images/icons/arbitrum-nova.svg"
      alt={props.alt ?? "Arbitrum Nova"}
      className={`rounded-full w-8 h-8 ${props.className ?? ""}`}
    />
  );
};

const Ethereum: React.FC<IconProps> = (props) => {
  return (
    <img
      src="/static/images/icons/ethereum.svg"
      alt={props.alt ?? "Ethereum"}
      className={`rounded-full w-8 h-8 ${props.className ?? ""}`}
    />
  );
};

const Polygon: React.FC<IconProps> = (props) => {
  return (
    <img
      src="/static/images/icons/polygon.svg"
      alt={props.alt ?? "Polygon"}
      className={`rounded-full w-8 h-8 ${props.className ?? ""}`}
    />
  );
};

const Avalanche: React.FC<IconProps> = (props) => {
  return (
    <img
      src="/static/images/icons/avalanche.svg"
      alt={props.alt ?? "Avalanche"}
      className={`rounded-full w-8 h-8 ${props.className ?? ""}`}
    />
  );
};

const Base: React.FC<IconProps> = (props) => {
  return (
    <img
      src="/static/images/icons/base.svg"
      alt={props.alt ?? "Base"}
      className={`rounded-full w-8 h-8 ${props.className ?? ""}`}
    />
  );
};

const Blast: React.FC<IconProps> = (props) => {
  return (
    <img
      src="/static/images/icons/blast.svg"
      alt={props.alt ?? "Blast"}
      className={`rounded-full w-8 h-8 ${props.className ?? ""}`}
    />
  );
};

const Klaytn: React.FC<IconProps> = (props) => {
  return (
    <img
      src="/static/images/icons/klaytn.svg"
      alt={props.alt ?? "Klaytn"}
      className={`rounded-full w-8 h-8 ${props.className ?? ""}`}
    />
  );
};

const Optimism: React.FC<IconProps> = (props) => {
  return (
    <img
      src="/static/images/icons/optimism.svg"
      alt={props.alt ?? "Optimism"}
      className={`rounded-full w-8 h-8 ${props.className ?? ""}`}
    />
  );
};

const Zora: React.FC<IconProps> = (props) => {
  return (
    <img
      src="/static/images/icons/zora-orb.svg"
      alt={props.alt ?? "Zora"}
      className={`rounded-full w-8 h-8 ${props.className ?? ""}`}
    />
  );
};

const ZoraOrb: React.FC<IconProps> = (props) => {
  return (
    <img
      src="/static/images/icons/zora-orb.svg"
      alt={props.alt ?? "Zora Orb"}
      className={`rounded-full w-8 h-8 ${props.className ?? ""}`}
    />
  );
};

const BNBChain: React.FC<IconProps> = (props) => {
  return (
    <img
      src="/static/images/icons/bsc.png"
      alt={props.alt ?? "BNB Chain"}
      className={`rounded-full w-8 h-8 ${props.className ?? ""}`}
    />
  );
};

const Solana: React.FC<IconProps> = (props) => {
  return (
    <img
      src="/static/images/icons/solana.svg"
      alt={props.alt ?? "Sonala"}
      className={`rounded-full w-8 h-8 ${props.className ?? ""}`}
    />
  );
};

export {
  Arbitrum,
  Ethereum,
  Polygon,
  Avalanche,
  Base,
  Blast,
  Klaytn,
  Optimism,
  Zora,
  ZoraOrb,
  ArbitrumNova,
  BNBChain,
  Solana,
};
