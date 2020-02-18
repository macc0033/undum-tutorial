// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "89353480-ec80-11e1-aff1-0800200c9a66"; // GEnerado por http://www.famkruithof.net/uuid/uuidgen

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

// En modo depuración, que no haya efectos de jquery
jQuery.fx.off=false

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
				"<h1>Tu cama</h1>\
				<p>Acabas de despertarte.</p>",
				{
	        enter: function(character, system, from) {
	            system.doLink('buenosdias');
	        }

				}
		),
		
		buenosdias: new undum.SimpleSituation (
				"<p>Lunes 17 de mayo de 2020 sobre las 8:30 de la mañana, cuando sonó la alarma,y entonces piensas entre <a href='levantarse'>levantarte </a> o <a href='durmiendo'>quedarte durmiendo</a>, ya que habías tenido un fin de semana ajetreado, y no precisamente de estudiar mucho....</p>"
		),
		durmiendo: new undum.SimpleSituation(
			"<img class='img-situation' src='./media/Imagenes/dormir.jpg'>\
			<p>Quedarse dormido tiene sus consecuencias y sus ventajas, pasamos a discutirlas; como por ejemplo, no poder aprovechar la mañana y tener que hacer más cosas para la tarde, pero claro si estás muy cansado y necesitas dormir, es una ventaja para poder afrontar el día con más fuerza e ir a la Universidad de Jaén (UJA).</p>\
			<p>Vuelves a abrir los ojos, te dispones a mirar el reloj y te das cuenta de que son las 15:30 de la tarde, es entonces cuando recuerdas que tenías clase a las 16:30 y por tanto solo te queda la opción de <a href='uja'>ir a la UJA </a> a contrareloj por gustarte demasiado la cama...</p>/"
		),
		levantarse: new undum.SimpleSituation(
			"<img class='img-situation' src='./media/Imagenes/levantarse.jpg'>\
<p>Levantarse temprano tiene su ventajas y consecuencias también, ya que puedes aprovechar el dia o estar muy cansado todo el dia, cuando te levantes tienes dos opciones para hacer, o bien <a href='gimnasio'> ir al gimnasio </a> o <a href='practica'> hacer la práctica de desarrollo ágil.</a></p>"
		),

		gimnasio: new undum.SimpleSituation(
			"<h1>Gimnasio</h1>\
			<img class='img-situation' src='./media/Imagenes/gimnasio.jpg'>\
			<p>Si llegas muy pronto al gimnasio está cerrado, y te preguntas qué hacer en ese caso, y entonces o <a href='desayunar'> desayunas en el bar </a>vecino del gimnasio o <a href='volver'> vuelves a casa </a> cabreado.</a></p>"
		),

		desayunar: new undum.SimpleSituation(
			"<img class='img-situation' src='./media/Imagenes/desayunar.jpg'>\
<p>Si desayunas en el bar bien, tendrás más energía para afrontar un entrenamiento de lujo y sentirte bien contigo mismo y estarás contento para después también <a href='practicabuena'>hacer la práctica con ganas.</a></a></p>"
		),
		

		uja: new undum.SimpleSituation(
			"<h1>UJA</h1>\
			<img class='img-situation' src='./media/Imagenes/universidad.jpg'>\
			<p>Una vez te encuentras en la Universidad de Jaén (UJA), te surge la duda de si <a href='entrar'>entrar a clase</a> o sin embargo <a href='noentrar'>quedarte en una mesa del A4</a> puesto recuerdas que tienes que entregar una práctica de la asignatura Desarrollo Ágil y aun falta bastante por hacer.</a></p>"
		),
		
		noentrar: new undum.SimpleSituation(
			"<h1>Mesa del A4</h1>\
			<p>Te dispones a sentarte en una mesa del flan, pero mientras subes las escaleras te encuentras a tu compañero de prácticas y resulta que ya tiene la práctica casi hecha, aunque tú te sientes mal, por otro lado te alegras he intentas <a href='practicabuena'>ayudarle en lo que queda de práctica</a>.</p>",	
		),

		volver: new undum.SimpleSituation(
			"<p>Decides volver a casa para ponerte a hacer la práctica de desarrollo ágil cabreado (por ir al gimnasio y encontrarlo cerrado), y por lo tanto haces la <a href='practicamala'> práctica de mala manera</a> y no podrás obtener la nota suficiente para aprobar.</a></p>"
		),

		practica: new undum.SimpleSituation(
			"<p>Si decides hacer la práctica recién levantado, no es buena idea ya que tendrás el estómago vacío y no podrás rendir bien para entender a la perfección la práctica, y <a href='practicamala'> se echa el tiempo de entregarla encima</a>.</a></p>"
		),	

		practicabuena: new undum.SimpleSituation(
			"<img class='img-situation' src='./media/Imagenes/pulgararriba.jpg'>\
<p>Finalmente queda un práctica medio decente, de tal forma que le puede gustar a nuestro profesor Victor Manuel Rivas y por ello, decidimos entregarla pese a todas las adversidades del camino.</a></p>"
		),

		practicamala: new undum.SimpleSituation(
			"<img class='img-situation' src='./media/Imagenes/pulgarabajo.jpg'>\
<p>Tras dedicarle un rato a la practica, te das cuenta de que la práctica te está quedando fatal, es en ese momento cuando recuerdas las sabias palabras del profesor Victorcillo de si no está para entregarlo mejor no entregarlo; y por tanto, no acabas entregando nada y frustrado.</a></p>/"
		),


		entrar: new undum.SimpleSituation(
			"<h1>Entras a clase</h1>\
			<p>Decides entrar a clase, te quedan por delante 5h de clase... después de todo el fin de semana y de llevar tan solo una media hora despierto no te enteras de nada.</p>\
			<p>Llega última hora y te sacan a la pizarra a un ejercicio que no tienes ni idea para poner el broche final a la tarde.</p>\
			<p>Llegas a casa e <a href='practicamala'>intentas ponerte con la práctica de Desarrollo ágil</a>.</p>/"
		),
	


};


// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
   
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
   
};
