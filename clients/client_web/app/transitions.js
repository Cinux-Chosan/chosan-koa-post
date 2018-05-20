export default function(){
  // Add your transitions here, like:
    this.transition(
      this.fromRoute('index'),
      this.toRoute('post'),
      this.use('toLeft'),
      this.reverse('toRight')
    );

    this.transition(
      this.fromRoute('post'),
      this.toRoute('edit'),
      // this.use('scrollThen', 'crossFade', { duration: 0 }),
      this.use('toLeft'),
      this.reverse('toRight')
    );

    this.transition(
      this.hasClass('change-editor'),
      this.toValue(true),
      this.useAndReverse('scrollThen', 'crossFade', { duration: 0 })
    )
}
