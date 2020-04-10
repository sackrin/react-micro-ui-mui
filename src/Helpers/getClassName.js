import shortId from 'shortid';
import { createGenerateClassName } from '@material-ui/core/styles';
const getClassName = productionPrefix => createGenerateClassName({
    productionPrefix,
    seed: shortId(),
});
export default getClassName;
