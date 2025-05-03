import compose from 'compose-function';
import { withRouter } from './with-router';

export const withProviders = compose(withRouter);

// example:
// export const withProviders = compose(
//     withRouter,
//     withAuth,
//     withI18n
//   );
// ================
// export default withRouter(
//     withAuth(
//       withI18n(MyComponent)
//     )
//   );
