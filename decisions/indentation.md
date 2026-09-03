# Four-space indentation

## Context

Source code indentation is a trade-off between horizontal space and visual
separation between nesting levels.

Two-space indentation reduces the horizontal space consumed by nested code.
This was particularly valuable when development environments were commonly
limited by lower-resolution displays, narrower screens, and smaller usable
editor areas.

Modern development environments have changed that trade-off considerably.
Widescreen displays and resolutions such as 1920×1080 and 2560×1440 provide
substantially more horizontal workspace than older environments such as
800×600 displays and CRT monitors.

As a result, minimizing every indentation level by two additional characters
provides less practical benefit than it historically did.

At the same time, indentation remains an important visual representation of
code structure. Four spaces provide clearer separation between nesting levels,
making nested blocks easier to distinguish while scanning code.

## Decision

Tably uses four spaces for each indentation level.

Spaces are used for indentation rather than tab characters.

This convention applies to source code and other structured project files where
indentation is controlled by the project.

Generated files and formats with externally defined formatting conventions are
not required to follow this rule.

## Rationale

Four-space indentation favors structural readability over minimizing horizontal
space.

The project considers the additional horizontal space required by four-space
indentation to be an acceptable trade-off in modern development environments,
where wider displays and higher resolutions have substantially reduced the
constraints that historically favored narrower indentation.

Four spaces also make nesting levels more visually distinct, particularly when
multiple blocks are nested.

This is therefore a deliberate project convention rather than an incidental
editor preference.

## Consequences

Existing project files using two-space indentation should be reformatted to
four spaces where this convention applies.

New code should use four-space indentation from the beginning.

Editors and formatting tools used with the project should be configured to
preserve this convention.
