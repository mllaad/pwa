import { useLocation, useNavigate } from "react-router-dom";

export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let _navigate = useNavigate();
    const backModal = () => _navigate(-1, { state: { modal: false } });
    const closeModal = (nav) => _navigate(nav, { state: { modal: false } });
    // go next modal page
    const navigate = (nav) => _navigate(nav, { state: { modal: true } });
    // go next modal page with some data
    const navigateByState = (nav, state) => {
      _navigate(nav, { state: { ...state, modal: true } });
    };

    const changeRouterState = (data) =>
      _navigate("", { replace: true, state: { ...data, modal: true } });

    return (
      <Component
        {...props}
        closeModal={closeModal}
        navigate={navigate}
        backModal={backModal}
        navigateByState={navigateByState}
        changeRouterState={changeRouterState}
      />
    );
  }
  return ComponentWithRouterProp;
}

export default withRouter;
