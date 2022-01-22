import { backGroundPokemon } from "./FunctionColorPokemon";

export const AdvanceBar = ({ done ,type}) => {
    return (
      <div className=" progress">
        <div
          className={backGroundPokemon(type)}
          style={{
            opacyty: 1,
            width: `${done}%`,
            borderRadius: 10,
            height:20
          }}
        >
          <span className="flex-center"> {done}%</span>
        </div>
      </div>
    );
  };