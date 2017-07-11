$(document).ready(function(){
	newQuote();
 
var newq, newa;
var fullquote = newq + " -" + newa; 
  
function newQuote(){
var qStack =[
	{quote: 'There are no happy endings. Endings are the saddest part, So just give me a happy middle And a very happy start.', author: 'Shel Silverstein'},
	{quote: 'She believed, of course ... because without something to believe in, life would be intolerable. ', author: 'Rosamunde Pilcher'},
	{quote: 'We all have our time machines, don\'t we. Those that take us back are memories...And those that carry us forward, are dreams.', author: 'H.G. Wells'},
	{quote: 'Life is a very bad novelist. It is chaotic and ludicrous.', author: 'Javier Marías'},
	{quote: 'The constant happiness is curiosity.', author: 'Alice Munro'},
	{quote: 'Every generation imagines itself to be more intelligent than the one that went before it, and wiser than the one that comes after it.', author: 'George Orwell'},
	{quote: 'I never saw a wild thing sorry for itself.', author: 'D.H. Lawrence'},
	{quote: 'I do not understand how anyone can live without some small place of enchantment to turn to.', author: 'Marjorie Kinnan Rawlings'},
  {quote: 'Atticus told me to delete the adjectives and I\'d have the facts.', author: 'Harper Lee'},
	{quote: 'One day, in retrospect, the years of struggle will strike you as the most beautiful.', author: 'Sigmund Freud'},
	{quote: 'You shall know the truth and the truth shall make you mad. ', author: 'Aldous Huxley'},
	{quote: 'Women want love to be a novel. Men, a short story.', author: 'Daphne du Maurier'},
	{quote: 'To die, it\'s easy. But you have to struggle for life.', author: 'Art Spiegelman'},
	{quote: 'Even the strongest and bravest must sometimes weep. It shows they have a great heart, one that can feel compassion for others.', author: 'Brian Jacques'},
	{quote: 'Life is not a matter of holding good cards, but of playing a poor hand well. ', author: 'Robert Louis Stevenson'},
	{quote: 'We improve ourselves by victory over our self. There must be contests, and you must win.', author: 'Edward Gibbon'},
	{quote: 'If there\'s a single lesson that life teaches us, it\'s that wishing doesn\'t make it so.', author: 'Lev Grossman'},
	{quote: 'Rare as is true love, true friendship is rarer.', author: 'Jean de La Fontaine'}
];

  var rand = Math.floor(Math.random() * qStack.length - 1);
  
  newq = qStack[rand].quote;
  newa = qStack[rand].author;
  fullquote = newq + " -" + newa;

	$('#quote').html(newq);
	$('#cite').html(newa);

}

   $('.refresh').on('click', function(){
		newQuote();

	});

// We bind a new event to our link
$('a#tweet').click(function(e){
  //We tell our browser not to follow that link
  e.preventDefault();
  var quote  = fullquote;
  //We trigger a new window with the Twitter dialog, in the middle of the page
  window.open('http://twitter.com/intent/tweet?' + '&text=' + quote + "&via=omgninjaz&" + '&', 'twitterwindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
});

})