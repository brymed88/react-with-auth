import './SpinnerComponent.min.css';
/*
 * The purpose of this component is to create a Spinner for page/api loads during the user interaction.
 * It can be initialized using the following variables.
 *
 * type - can be either full or part, this signifies which css style block to use for the spinner
 * size - can be any size in px, ie.. 50px
 *
 * Ex. <SpinnerComponent type='full' size='100px' />
 */

const SpinnerComponent = ({ type, size }) => {
  return (
    <section className={type === 'full' ? 'spinner-full' : 'spinner-part'}>
      <div style={{ height: `${size}`, width: `${size}` }}></div>
    </section>
  );
};
export default SpinnerComponent;
