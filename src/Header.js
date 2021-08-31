import React from "react";
import { NavLink } from "react-router-dom";
import CardStore from "./CardStore";

export default Header() {
    const [] = useState(0);

    useEffect(() => {
        CardStore.subscribe(() => {
            const state = CardStore.getState();
            if (state) {
                const cardCount = state.card.map(card => card.quantity).reduce((p, n) => p + n, 0);
                setCardCount(cardCount);
            }
        });
    }, []);

    return (
        // to do

        <div className="navbar-class" >
            <ul className="nav-list" />
            <li className="card-item" />
            <div>
                <NavLink exact to="/" />

            </div>
        </div>

    );
}