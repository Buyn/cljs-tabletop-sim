# Requirements Document

## Introduction

A browser-based tabletop simulator built with ClojureScript, shadow-cljs, Reagent, and Tailwind CSS. The application provides a 2D top-down virtual tabletop where a solo player can set up and play card games and dice games using a standard 52-card deck and a standard D&D dice set. Players can customize standard decks, save and load game state via local JSON files, and start new or restore previous sessions — all without multiplayer, scripting, physics simulation, or custom asset uploads.

## Glossary

- **App**: The tabletop simulator web application.
- **Table**: The main 2D top-down play area where cards and dice are placed and manipulated.
- **Card**: A single playing card belonging to a Deck.
- **Deck**: An ordered collection of Cards. A Standard_Deck contains 52 cards (4 suits × 13 ranks). A Custom_Deck is a Standard_Deck with user-defined suit labels, rank labels, or face colors.
- **Hand**: A private area at the bottom of the Table where the player holds Cards face-up, visible only in the player's view.
- **Die**: A single die with a fixed number of faces (d4, d6, d8, d10, d12, d20, d100).
- **Dice_Set**: The full D&D standard set of dice: d4, d6, d8, d10, d12, d20, d100.
- **Roll_Result**: The integer value produced when a Die is rolled.
- **Game_State**: The complete serializable snapshot of the Table, including all Card positions, Deck compositions, Die positions, and Hand contents.
- **Save_File**: A JSON file downloaded to the user's local filesystem containing a serialized Game_State.
- **Session**: A single continuous play session from start (new or restored) until the browser tab is closed or a new session is started.

## Requirements

### Requirement 1: Start or Restore a Session

**User Story:** As a player, I want to start a new game or restore a previous one, so that I can begin playing immediately without losing prior progress.

#### Acceptance Criteria

1. WHEN the App is first loaded, THE App SHALL display a start screen with two options: "New Game" and "Load Game".
2. WHEN the player selects "New Game", THE App SHALL initialize an empty Table with no Cards or Dice placed, and transition to the Table view.
3. WHEN the player selects "Load Game", THE App SHALL prompt the player to select a local JSON file.
4. WHEN a valid Save_File is selected, THE App SHALL deserialize the Game_State and restore the Table to the saved configuration.
5. IF the selected file is not a valid Save_File, THEN THE App SHALL display an error message describing the problem and remain on the start screen.

### Requirement 2: Save Game State

**User Story:** As a player, I want to save my current game to a local file, so that I can resume it later.

#### Acceptance Criteria

1. WHEN the player triggers "Save Game", THE App SHALL serialize the current Game_State to JSON and initiate a browser file download named `tabletop-save.json`.
2. THE Game_State serialization SHALL include all Card positions and face-up/face-down states, all Deck compositions and positions, all Die positions and last Roll_Result values, and all Hand contents.
3. WHEN a Save_File is downloaded, THE App SHALL continue the current Session without interruption.

### Requirement 3: Add Components to the Table

**User Story:** As a player, I want to add decks and dice to the table, so that I can set up the game I want to play.

#### Acceptance Criteria

1. WHEN the player opens the component panel and selects "Add Standard Deck", THE App SHALL place a new Standard_Deck (52 shuffled cards) onto the Table at a default position.
2. WHEN the player opens the component panel and selects "Add Custom Deck", THE App SHALL open the Deck_Customizer.
3. WHEN the player opens the component panel and selects a Die type from the Dice_Set, THE App SHALL place a new Die of that type onto the Table at a default position.
4. THE App SHALL allow the player to add multiple Decks and multiple Dice of the same type to the Table within a single Session.

### Requirement 4: Deck Customization

**User Story:** As a player, I want to customize a standard deck's suits and ranks, so that I can use themed or variant card sets.

#### Acceptance Criteria

1. WHEN the Deck_Customizer is open, THE Deck_Customizer SHALL allow the player to define exactly 4 suit labels (text strings, maximum 20 characters each).
2. WHEN the Deck_Customizer is open, THE Deck_Customizer SHALL allow the player to define exactly 13 rank labels (text strings, maximum 10 characters each).
3. WHEN the Deck_Customizer is open, THE Deck_Customizer SHALL allow the player to choose a face color for the card fronts from a predefined palette of at least 8 colors.
4. WHEN the player confirms the Deck_Customizer, THE App SHALL place a new Custom_Deck of 52 shuffled cards using the defined labels and color onto the Table.
5. IF any suit label or rank label is empty, THEN THE Deck_Customizer SHALL prevent confirmation and display a validation error.

### Requirement 5: Card Manipulation

**User Story:** As a player, I want to drag, flip, and move cards, so that I can play card games on the table.

#### Acceptance Criteria

1. WHEN the player drags a Card on the Table, THE App SHALL move the Card to the new position in real time.
2. WHEN the player double-clicks a Card on the Table, THE App SHALL toggle the Card between face-up and face-down states.
3. WHEN the player drags a Card to the Hand area, THE App SHALL move the Card from the Table into the Hand.
4. WHEN the player drags a Card from the Hand to the Table, THE App SHALL move the Card from the Hand onto the Table at the drop position.
5. WHEN the player right-clicks a Deck on the Table, THE App SHALL display a context menu with options: "Draw Top Card", "Shuffle", and "Flip Deck".
6. WHEN the player selects "Draw Top Card" from the Deck context menu, THE App SHALL move the top Card from the Deck to the Hand.
7. WHEN the player selects "Shuffle" from the Deck context menu, THE App SHALL randomize the order of all Cards remaining in the Deck.
8. WHEN the player selects "Flip Deck" from the Deck context menu, THE App SHALL toggle all Cards in the Deck between face-up and face-down.
9. IF a Deck contains zero Cards, THEN THE App SHALL display the Deck as an empty placeholder and disable the "Draw Top Card" option.

### Requirement 6: Dice Rolling

**User Story:** As a player, I want to roll dice on the table, so that I can resolve game actions that require randomness.

#### Acceptance Criteria

1. WHEN the player clicks a Die on the Table, THE App SHALL generate a random Roll_Result in the range [1, N] where N is the number of faces on the Die, and display the Roll_Result on the Die immediately.
2. THE App SHALL use a uniform distribution when generating Roll_Results, such that each face value has equal probability of 1/N.
3. WHEN a Die is placed on the Table for the first time, THE App SHALL display a neutral state (no Roll_Result shown) until the Die is first clicked.
4. WHEN the player drags a Die on the Table, THE App SHALL move the Die to the new position without triggering a roll.

### Requirement 7: Table Interaction

**User Story:** As a player, I want to pan and arrange the table freely, so that I can organize components the way I prefer.

#### Acceptance Criteria

1. WHEN the player drags on an empty area of the Table, THE App SHALL pan the Table viewport.
2. WHEN the player scrolls on the Table, THE App SHALL zoom the Table viewport in or out, centered on the cursor position.
3. THE App SHALL constrain zoom to a minimum of 50% and a maximum of 200% of the default scale.
4. WHEN the player right-clicks a Card or Die on the Table, THE App SHALL display a context menu with a "Remove" option.
5. WHEN the player selects "Remove" from the context menu, THE App SHALL remove the component from the Table.

### Requirement 8: Persistence Round-Trip

**User Story:** As a player, I want saved files to restore my exact game state, so that I can trust the save/load feature.

#### Acceptance Criteria

1. FOR ALL valid Game_State values, serializing then deserializing the Game_State SHALL produce a Game_State equivalent to the original (round-trip property).
2. WHEN a Game_State is deserialized from a Save_File, THE App SHALL place all components at the positions recorded in the Save_File.
3. WHEN a Game_State is deserialized from a Save_File, THE App SHALL restore all Card face-up/face-down states as recorded in the Save_File.
4. WHEN a Game_State is deserialized from a Save_File, THE App SHALL restore all Die Roll_Result values as recorded in the Save_File.
