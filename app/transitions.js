export default function() {
  this.transition(
    this.fromRoute('episodes.index'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.toRoute('root.about'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
