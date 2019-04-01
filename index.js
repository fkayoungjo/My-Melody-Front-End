document.addEventListener('DOMContentLoaded', getMelodies)

Tone.context.suspend()
console.clear();

	var synths = [
		new Tone.MembraneSynth({
			volume: 6,
			pitchDecay:0.05,
			octaves: 4,
			oscillator : {
			type :"fmsine",
			phase: 140,
			modulationType: "sine",
			modulationIndex:0.8,
			partials: [1] //1,0.1,0.01,0.01
		},
		envelope :{
			attack:0.01,
			decay :0.74,
			sustain: 0.71,
			release: 0.05,
			attackCurve :"exponential"
		}
	}),
	new Tone.MembraneSynth({
		volume: 6,
		pitchDecay:0.05,
		octaves: 4,
		oscillator : {
			type :"fmsine",
			phase: 140,
			modulationType: "sine",
			modulationIndex:0.8,
			partials: [1] //1,0.1,0.01,0.01
		},
		envelope :{
			attack:0.01,
			decay :0.74,
			sustain: 0.71,
			release: 0.05,
			attackCurve :"exponential"
		}
	}),
	new Tone.MembraneSynth({
		volume: 6,
		"pitchDecay" : 0.008,
		"octaves" : 2,
		"envelope" : {
			"attack" : 0.0006,
			"decay" : 0.5,
			"sustain" : 0
		}
	}),
	new Tone.MonoSynth({
			"oscillator" : {
				"type" : "square8"
			},
			"envelope" : {
				"attack" : 0.05,
				"decay" : 0.3,
				"sustain" : 0.4,
				"release" : 0.8,
			},
			"filterEnvelope" : {
				"attack" : 0.001,
				"decay" : 0.7,
				"sustain" : 0.1,
				"release" : 0.8,
				"baseFrequency" : 300,
				"octaves" : 4
			}
		}),
	new Tone.MonoSynth({
		"oscillator" : {
			"type" : "square8"
			},
		"envelope" : {
			"attack" : 0.05,
			"decay" : 0.3,
			"sustain" : 0.4,
			"release" : 0.8,
			},
		"filterEnvelope" : {
			"attack" : 0.001,
			"decay" : 0.7,
			"sustain" : 0.1,
			"release" : 0.8,
			"baseFrequency" : 300,
			"octaves" : 4
		}
			}),
	new Tone.MonoSynth({
					"oscillator" : {
						"type" : "square8"
					},
					"envelope" : {
						"attack" : 0.05,
						"decay" : 0.3,
						"sustain" : 0.4,
						"release" : 0.8,
					},
					"filterEnvelope" : {
						"attack" : 0.001,
						"decay" : 0.7,
						"sustain" : 0.1,
						"release" : 0.8,
						"baseFrequency" : 300,
						"octaves" : 4
					}
				}),
	new Tone.MonoSynth({
						"oscillator" : {
							"type" : "square8"
						},
						"envelope" : {
							"attack" : 0.05,
							"decay" : 0.3,
							"sustain" : 0.4,
							"release" : 0.8,
						},
						"filterEnvelope" : {
							"attack" : 0.001,
							"decay" : 0.7,
							"sustain" : 0.1,
							"release" : 0.8,
							"baseFrequency" : 300,
							"octaves" : 4
						}
					}),
	new Tone.MonoSynth({
							"oscillator" : {
								"type" : "square8"
							},
							"envelope" : {
								"attack" : 0.05,
								"decay" : 0.3,
								"sustain" : 0.4,
								"release" : 0.8,
							},
							"filterEnvelope" : {
								"attack" : 0.001,
								"decay" : 0.7,
								"sustain" : 0.1,
								"release" : 0.8,
								"baseFrequency" : 300,
								"octaves" : 4
							}
						}),
	new Tone.MonoSynth({
								"oscillator" : {
									"type" : "square8"
								},
								"envelope" : {
									"attack" : 0.05,
									"decay" : 0.3,
									"sustain" : 0.4,
									"release" : 0.8,
								},
								"filterEnvelope" : {
									"attack" : 0.001,
									"decay" : 0.7,
									"sustain" : 0.1,
									"release" : 0.8,
									"baseFrequency" : 300,
									"octaves" : 4
								}
							}),
	new Tone.MonoSynth({
									"oscillator" : {
										"type" : "square8"
									},
									"envelope" : {
										"attack" : 0.05,
										"decay" : 0.3,
										"sustain" : 0.4,
										"release" : 0.8,
									},
									"filterEnvelope" : {
										"attack" : 0.001,
										"decay" : 0.7,
										"sustain" : 0.1,
										"release" : 0.8,
										"baseFrequency" : 300,
										"octaves" : 4
									}
								}),
  new Tone.PolySynth(6, Tone.Synth, {
			"oscillator" : {
				"partials" : [0, 2, 3, 4],
			}
		}),
    new Tone.PolySynth(6, Tone.Synth, {
			"oscillator" : {
				"partials" : [0, 2, 3, 4],
			}
		}),
    new Tone.PolySynth(6, Tone.Synth, {
			"oscillator" : {
				"partials" : [0, 2, 3, 4],
			}
		}),
    new Tone.PolySynth(6, Tone.Synth, {
			"oscillator" : {
				"partials" : [0, 2, 3, 4],
			}
		}),
    new Tone.PolySynth(6, Tone.Synth, {
			"oscillator" : {
				"partials" : [0, 2, 3, 4],
			}
		}),
    new Tone.PolySynth(6, Tone.Synth, {
			"oscillator" : {
				"partials" : [0, 2, 3, 4],
			}
		}),
    new Tone.PolySynth(6, Tone.Synth, {
			"oscillator" : {
				"partials" : [0, 2, 3, 4],
			}
		}),
    new Tone.PolySynth(3, Tone.Synth, {
			"oscillator" : {
				"type" : "fatsawtooth",
				"count" : 3,
				"spread" : 30
			},
			"envelope": {
				"attack": 0.01,
				"decay": 0.1,
				"sustain": 0.5,
				"release": 0.4,
				"attackCurve" : "exponential"
			},
		}),
    new Tone.PolySynth(3, Tone.Synth, {
			"oscillator" : {
				"type" : "fatsawtooth",
				"count" : 3,
				"spread" : 30
			},
			"envelope": {
				"attack": 0.01,
				"decay": 0.1,
				"sustain": 0.5,
				"release": 0.4,
				"attackCurve" : "exponential"
			},
		}),
		new Tone.PolySynth(3, Tone.Synth, {
			"oscillator" : {
				"type" : "fatsawtooth",
				"count" : 3,
				"spread" : 30
			},
			"envelope": {
				"attack": 0.01,
				"decay": 0.1,
				"sustain": 0.5,
				"release": 0.4,
				"attackCurve" : "exponential"
			},
		}),
		new Tone.PolySynth(3, Tone.Synth, {
			"oscillator" : {
				"type" : "fatsawtooth",
				"count" : 3,
				"spread" : 30
			},
			"envelope": {
				"attack": 0.01,
				"decay": 0.1,
				"sustain": 0.5,
				"release": 0.4,
				"attackCurve" : "exponential"
			},
		}),
		new Tone.PolySynth(3, Tone.Synth, {
			"oscillator" : {
				"type" : "fatsawtooth",
				"count" : 3,
				"spread" : 30
			},
			"envelope": {
				"attack": 0.01,
				"decay": 0.1,
				"sustain": 0.5,
				"release": 0.4,
				"attackCurve" : "exponential"
			},
		}),
		new Tone.PolySynth(3, Tone.Synth, {
			"oscillator" : {
				"type" : "fatsawtooth",
				"count" : 3,
				"spread" : 30
			},
			"envelope": {
				"attack": 0.01,
				"decay": 0.1,
				"sustain": 0.5,
				"release": 0.4,
				"attackCurve" : "exponential"
			},
		})
	]

var gain = new Tone.Gain(0.6);
gain.toMaster();

synths.forEach(function (synth) {return synth.connect(gain);});

var rows = document.body.querySelectorAll('div > div'),
notes = ['E1', 'E2', 'C4', 'F3', 'G3', 'A3', 'B3','C4', 'D4', 'E4','F3', 'G3', 'A3', 'B3','C4', 'D4', 'E4','F3', 'G3', 'A3', 'B3','C4', 'D4','E4'];
var index = 0;

Tone.Transport.scheduleRepeat(repeat, '8n');
Tone.Transport.start();

function repeat(time) {
  let step = index % 32;
  for (let i = 0; i < rows.length; i++) {
    let synth = synths[i],
        note = notes[i],
        row = rows[i],
        input = row.querySelector(`input:nth-child(${step + 1})`);
    if (input.checked) synth.triggerAttackRelease(note, '8n', time);
  }
  index++;
}

const play = document.getElementById('play')
play.addEventListener('click', song )


function song(e){
  if(play.innerText === 'Pause'){
    Tone.context.suspend()
    play.innerText = 'Play'
    }
    else{
    Tone.context.resume()
    play.innerText = 'Pause'
    }
  }

const saveSong = document.querySelector('#save')
const melodyName = document.querySelector('#melody-name')
let melodies = document.querySelector('.left')

saveSong.addEventListener('click', save)

function save(e){
		let boxes= document.querySelectorAll('.box')
		let checkedBoxes = []
		let boxValues = []
    boxes.forEach(box => {
			boxValues.push(box.checked)
			if(box.checked === true){
        console.log(box);
				checkedBoxes.push(box)
			}
		})
		console.log(boxValues)
		console.log(checkedBoxes)
		console.log(melodyName.value)
	 	fetch('http://localhost:3000/api/v1/melodies/',
    {
      method: 'POST',
				headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      body: JSON.stringify({
        title: melodyName.value,
        content: boxValues.toString(),
				checked: checkedBoxes.toString()

			})
    })
		.then(res => res.json())
		.then(json => newSaved(json))
		.then(clearBoxes)
}

function newSaved(json){
let name = `<h6 data-id=${json.id} class="melody">${json.title}</h6>`
melodies.innerHTML += name
}

function getMelodies(){
	fetch('http://localhost:3000/api/v1/melodies/')
	.then(res => res.json())
	.then(showMelodies)
}

function showMelodies(melodyArray){
	melodyArray.forEach(melody => {
		melodies.innerHTML += `<h6 data-id=${melody.id} class="melody">${melody.title}</h6>`
	})

}
document.addEventListener('click', showMelody)
document.addEventListener('click', refresh)

function refresh(e) {
	if(e.target.className == "home"){
		location.reload()
	}
}

function clearBoxes(){
	let boxes = document.querySelectorAll('.box')
	boxes.forEach(box => {
		box.checked = false
	})
}

function showMelody(e) {

	if(e.target.className == "melody"){
		let id = e.target.dataset.id
		Tone.context.suspend()
		play.innerText = 'Play'
		clearBoxes()
		fetch(`http://localhost:3000/api/v1/melodies/${id}`)
	    .then(res => res.json())
	    .then(melody => populate(melody))
	}
}
let clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', clearBoxes)
function clearBoxes(){
	let boxes = document.querySelectorAll('.box')
	boxes.forEach(box => {
		box.checked = false
	})
}

function populate(melody) {
	let heading = document.querySelector(".top")
	heading.innerText = melody.title
	let melodyName = document.querySelector("#melody-name")
	melodyName.value = melody.title
	let saveButton = document.querySelector("#save")
	update.dataset.id = melody.id
	let boxArray = []
	let checks = []
	let boxSelect =(melody.content)
	let boxes = document.querySelectorAll('.box')
	boxArray = boxSelect.split(",")
	for (let i = 0; i < boxArray.length; i++) {
		if(boxArray[i] === 'true') {
			checks.push(i)
		}
	}
	checks.forEach(check => {
		boxes[check].checked = true
	})

}

let update = document.querySelector("#update")
update.addEventListener('click', updateSong)
function updateSong(e) {
	let boxes= document.querySelectorAll('.box')
	let checkedBoxes = []
	let boxValues = []
	boxes.forEach(box => {
		boxValues.push(box.checked)
		if(box.checked === true){
			console.log(box);
			checkedBoxes.push(box)
		}
	})
let id = e.target.dataset.id
	fetch(`http://localhost:3000/api/v1/melodies/${id}`,
	{
		method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		body: JSON.stringify({
			title: melodyName.value,
			content: boxValues.toString(),
			checked: checkedBoxes.toString()

		})
	})
	.then(res => res.json())
	.then(json => console.log(json))

}
