const famousQuotesEng = [
    "\"First, solve the problem. Then, write the code.\"<br>― John Johnson",
    "\"Code is like humor. When you have to explain it, it’s bad.\"<br>― Cory House",
    "\"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.\"<br>― Martin Fowler",
    "\"No matter which field of work you want to go in, it is of great importance to learn at least one programming language.\"<br>― Ram Ray",
    "\"If we want users to like our software, we should design it to behave like a likable person.\"<br>― Alan Cooper",
    "\"I taught myself how to program computers when I was a kid, bought my first computer when I was 10, and sold my first commercial program when I was 12.\"<br>― Elon Musk",
    "\"Web development is difficult, only then it is fun to do. You just have to set your standards. If it were to be easy, would anyone do it?\"<br>― Olawale Daniel",
    "\"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.\"<br>― Linus Torvalds",
    "\"You might not think that programmers are artists, but programming is an extremely creative profession. It’s logic-based creativity.\"<br>― John Romero",
    "\"There is always one more bug to fix.\"<br>― Ellen Ullman",
    "\"If debugging is the process of removing bugs, then programming must be the process of putting them in.\"<br>― Sam Redwine",
    "\"If, at first, you do not succeed, call it version 1.0.\"<br>― Khayri R.R. Woulfe",
    "\"Before software can be reusable it first has to be usable.\"<br>― Ralph Johnson",
    "\"In programming, if someone tells you \"you’re overcomplicating it\" they’re either 10 steps behind you or 10 steps ahead of you.\"<br>― Andrew Clark",
    "\"The mark of a mature programmer is willingness to throw out code you spent time on when you realize it’s pointless.\"<br>― Bram Cohen",
    "\"Reusing pieces of code is like picking off sentences from other people’s stories and trying to make a magazine article.\"<br>― Bob Frankston",
    "\"If you cannot explain a program to yourself, the chance of the computer getting it right is pretty small.\"<br>― Bob Frankston",
    "\"Everything should be made as simple as possible. But to do that you have to master complexity.\"<br>― Butler Lampson",
    "\"For the things we have to learn before we can do them, we learn by doing them.\"<br>― Aristotle",
    "\"Wisdom... comes not from age, but from education and learning.\"<br>― Anton Chekhov",
    "\"I am always doing that which I cannot do, in order that I may learn how to do it.\"<br>― Pablo Picasso",
    "\"It is what we know already that often prevents us from learning.\"<br>― Claude Bernard",
    "\"Leadership and learning are indispensable to each other.\"<br>― John F. Kennedy",
    "\"If you are not willing to learn, no one can help you. If you are determined to learn, no one can stop you.\"<br>― Zig Ziglar",
    "\"You don't learn to walk by following rules. You learn by doing, and by falling over.\"<br>― Richard Branson",
    "\"You can teach a student a lesson for a day; but if you can teach him to learn by creating curiosity, he will continue the learning process as long as he lives.\"<br>― Clay P. Bedford",
    "\"Learning is not attained by chance. It must be sought for with ardour and attended with diligence.\"<br>― Abigail Adams",
    "\"Develop a passion for learning. If you do, you will never cease to grow.\"<br>― Anthony J. D'Angelo",
    "\"You don't understand anything until you learn it more than one way.\"<br>― Marvin Minsky",
    "\"Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young. The greatest thing in life is to keep your mind young.\"<br>― Henry Ford",
  ];
  
  const famousQuotesSpa = [
    "\"Primero, resuelve el problema. Luego, escribe el código.\"<br>― John Johnson",
    "\"El código es como el humor. Cuando tienes que explicarlo, es malo.\"<br>― Cory House",
    "\"Cualquier tonto puede escribir un código que una computadora pueda entender. Los buenos programadores escriben código que los humanos pueden entender.\"<br>― Martin Fowler",
    "\"No importa en qué campo de trabajo quieras entrar, es de gran importancia aprender al menos un lenguaje de programación.\"<br>― Ram Ray",
    "\"Si queremos que a los usuarios les guste nuestro software, debemos diseñarlo para que se comporte como una persona agradable.\"<br>― Alan Cooper",
    "\"Aprendí a programar computadoras cuando era niño, compré mi primera computadora cuando tenía 10 años y vendí mi primer programa comercial cuando tenía 12.\"<br>― Elon Musk",
    "\"El desarrollo web es difícil, solo entonces es divertido hacerlo. Solo tienes que establecer tus estándares. Si fuese fácil, ¿alguien lo haría?\"<br>― Olawale Daniel",
    "\"La mayoría de los buenos programadores no programan porque esperan que les paguen o que el público los adore, sino porque es divertido programar.\"<br>― Linus Torvalds",
    "\"Puede que no pienses que los programadores son artistas, pero la programación es una profesión extremadamente creativa. Es creatividad basada en la lógica.\"<br>― John Romero",
    "\"Siempre hay un error más que corregir.\"<br>― Ellen Ullman",
    "\"Si la depuración es el proceso de eliminar errores, entonces la programación debe ser el proceso de incorporarlos.\"<br>― Sam Redwine",
    "\"Si al principio no tienes éxito, llámalo versión 1.0.\"<br>― Khayri R.R. Woulfe",
    "\"Antes de que el software pueda ser reutilizable, primero tiene que ser utilizable.\"<br>― Ralph Johnson",
    "\"En programación, si alguien te dice \"lo estás complicando demasiado\", esa persona está 10 pasos por detrás o 10 pasos por delante de tí.\"<br>― Andrew Clark",
    "\"La marca de un programador maduro es la voluntad de desechar el código al que le dedicaste tu tiempo cuando te das cuenta de que no tiene sentido.\"<br>― Bram Cohen",
    "\"Reutilizar fragmentos de código es como extraer frases de las historias de otras personas e intentar hacer un artículo de revista.\"<br>― Bob Frankston",
    "\"Si no puedes explicarte un programa a tí mismo, la posibilidad de que la computadora lo haga bien es bastante pequeña.\"<br>― Bob Frankston",
    "\"Todo debe hacerse lo más simple posible. Pero para hacer eso tienes que dominar la complejidad.\"<br>― Butler Lampson",
    "\"Porque las cosas que tenemos que aprender antes de poder hacerlas, las aprendemos haciéndolas.\"<br>― Aristóteles",
    "\"La sabiduría... no proviene de la edad, sino de la educación y el aprendizaje.\"<br>― Anton Chekhov",
    "\"Siempre estoy haciendo aquello que no puedo hacer, de modo que pueda aprender a hacerlo.\"<br>― Pablo Picasso",
    "\"Es lo que ya sabemos lo que a menudo nos impide aprender.\"<br>― Claude Bernard",
    "\"El liderazgo y el aprendizaje son indispensables el uno al otro.\"<br>― John F. Kennedy",
    "\"Si no estás dispuesto a aprender, nadie puede ayudarte. Si estás decidido a aprender, nadie puede detenerte.\"<br>― Zig Ziglar",
    "\"No se aprende a caminar siguiendo reglas. Se aprende haciendo y cayendo.\"<br>― Richard Branson",
    "\"Puedes enseñarle a un estudiante una lección por un día; pero si puedes enseñarle a aprender creando curiosidad, continuará el proceso de aprendizaje toda su vida.\"<br>― Clay P. Bedford",
    "\"El aprendizaje no se logra por casualidad. Debe buscarse con ardor y atenderse con diligencia.\"<br>― Abigail Adams",
    "\"Desarrolla una pasión por aprender. Si lo haces, nunca dejarás de crecer.\"<br>― Anthony J. D'Angelo",
    "\"No entiendes nada hasta que lo aprendes de más de una forma.\"<br>― Marvin Minsky",
    "\"Cualquiera que deja de aprender es viejo, ya sea a los veinte o a los ochenta. Cualquiera que sigue aprendiendo se mantiene joven. Lo mejor en la vida es mantener la mente joven.\"<br>― Henry Ford",
  ];

//Texto de la frase diaria.
switch(prefLenguaje)
{
  case "Spanish":
    document.getElementById('dailyQuote').innerHTML = famousQuotesSpa[randomInteger(0, famousQuotesEng.length - 1)];
  break;
  case "English":
    document.getElementById('dailyQuote').innerHTML = famousQuotesEng[randomInteger(0, famousQuotesEng.length - 1)];
  break;
}