import React from "react";

// tekst do wymiany w razie użycia innego języka
// zamieszczony w innym pliku
// eng -> pl
function AboutInfo(props) {
  return (
    <div>
      <p>About me</p>
      <span>Profesjonalnie podchodząc do sprawy jestem programistką.</span>
      <span>
        Ukończyłam kierunek Informatyka Stosowana na wydziale Fizyki i
        Informatyki Stosowanej na Akademii Górniczo-Hutniczej w Krakowie. Mogę
        się pochwalić tytułami magistra inżyniera.
      </span>
      <span>
        Moją wiedzę i umiejętności rozwijam w technologiach powiązanych z
        Frontend oraz Mobile Development. Jestem w trakcie nauki UX Design oraz
        projektowania stron internetowych. Interesuję się również
        bezpieczeństwem w sieci oraz technologiami backendowymi.
      </span>
      <span>
        Moim gulty pleasure jest język Python, którego w niedługim czasie zacznę
        częściej stosować.
      </span>
    </div>
  );
}

export default AboutInfo;
