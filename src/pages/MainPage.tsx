import "../App.css";

const MainPage = () => (
  <div className="main-app">
    <div className="main-content">
      <h1 className="aboutLeagueH1">What is League of Legends?</h1>
      <div className="content">
        <p>
          League of Legends is a fast-paced competitive online game where two
          teams of 5 powerful champions battle head-to-head across multiple
          battlefields and game modes to destroy the enemy nexus.
        </p>
      </div>
    </div>

    <div className="grid">
      <div className="caja">
        <h3 className="gamemode">Explore crazy game modes!</h3>
        <div className="grieta">
          <h3>Summoners Rift</h3>
          <p>
            Classic mode where two teams of five compete to destroy each other's
            Nexus on a three-lane map with a jungle.
          </p>
        </div>
        <div className="aram">
          <h3>ARAM</h3>
          <p>
            Fast-paced mode with random champions fighting on a single lane to
            destroy the enemy Nexus.
          </p>
        </div>
        <div className="arena">
          <h3>Arena</h3>
          <p>Battle in defined spaces for intense and strategic combat.</p>
        </div>

        <div className="tft">
          <h3>Teamfight Tactics</h3>
          <p>
            Strategic auto-battler where you build teams to outlast opponents in
            rounds of combat.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default MainPage;
