import { connect } from 'react-redux';
import HelloWorld from '../components/HelloWorld';

const mapStateToProps = ({ example }) => ({ example });

export default connect(mapStateToProps)(HelloWorld);
