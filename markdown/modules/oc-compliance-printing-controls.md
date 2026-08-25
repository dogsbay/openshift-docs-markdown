{%- set _mod_docs_content_type = "PROCEDURE" %}
# Printing controls {id="printing-controls_{{ context }}"}

You can view a report of the compliance standards and controls that a given profile satisfies. {._abstract}

Compliance standards are generally organized into a the following hierarchy:

*   A benchmark is the top-level definition of a set of controls for a particular standard. For example, FedRAMP Moderate or Center for Internet Security (CIS) v.1.6.0.
*   A control describes a family of requirements that must be met to be in compliance with the benchmark. For example, FedRAMP AC-01 (access control policy and procedures).
*   A rule is a single check that is specific for the system being brought into compliance, and one or more of these rules map to a control.
*   The Compliance Operator handles the grouping of rules into a profile for a single benchmark. It can be difficult to determine which controls that the set of rules in a profile satisfy.

**Procedure**

*   The `oc compliance` `controls` subcommand provides a report of the standards and controls that a given profile satisfies:
    ```terminal
    $ oc compliance controls profile ocp4-cis-node
    ```
    ```terminal title="Example output"
    +-----------+----------+
    | FRAMEWORK | CONTROLS |
    +-----------+----------+
    | CIS-OCP   | 1.1.1    |
    +           +----------+
    |           | 1.1.10   |
    +           +----------+
    |           | 1.1.11   |
    +           +----------+
    ...
    ```