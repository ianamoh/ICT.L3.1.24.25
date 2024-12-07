function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6dZZkm5xZo6":
        Script1();
        break;
      case "6rLYn04P6dM":
        Script2();
        break;
  }
}

function Script1()
{
  // Access the Storyline player
var player = GetPlayer();

// Retrieve text entry variables
var firstName = player.GetVar("StdFirstName");
var familyName = player.GetVar("StdFamilyName");
var email = player.GetVar("StdEmail");
var group = player.GetVar("StdGroup");

// Validation logic
if (!firstName || !familyName || !email || !group) {
    // Show an alert or custom error layer
    alert("Please fill out your ID details!");
    // Set the CanProceed variable to False to prevent moving forward
    player.SetVar("CanProceed", false);
} else {
    // Allow navigation to the next slide by setting CanProceed to True
    player.SetVar("CanProceed", true);
}
}

function Script2()
{
  const url = "https://script.google.com/macros/s/AKfycbze5y01Cj8TDnjnCB8LsXoITnzqwPCVlARzecjO2_SuxZgTOCAO9tImr3bdQa6Mw4Ufjg/exec";

const player = GetPlayer();

// Retrieve the value of the custom variables
const scorePercent = player.GetVar("CustomScorePercent");
const stdFirstName = player.GetVar("StdFirstName");
const stdFamilyName = player.GetVar("StdFamilyName");
const stdEmail = player.GetVar("StdEmail");
const stdGroup = player.GetVar("StdGroup");

fetch(url, {
  method: 'POST',
  mode: 'no-cors', // Adjust if needed for CORS
  cache: 'no-cache',
  headers: { 'Content-Type': 'application/json' },
  redirect: 'follow',
  body: JSON.stringify({
    scorePercent: scorePercent,
    stdFirstName: stdFirstName,
    stdFamilyName: stdFamilyName,
    stdEmail: stdEmail,
    stdGroup: stdGroup
  })
});


}

