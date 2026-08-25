{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the OpenShift CLI by using Homebrew {id="cli-installing-cli-brew_{{ context }}"}

For macOS, you can install the OpenShift CLI (`oc`) by using the [Homebrew](https://brew.sh) package manager. {._abstract}

**Prerequisites**

*   You must have Homebrew (`brew`) installed.

**Procedure**

*   Install the [openshift-cli](https://formulae.brew.sh/formula/openshift-cli) package by running the following command:
    ```terminal
    $ brew install openshift-cli
    ```

**Verification**

*   Verify your installation by using an `oc` command:
    ```terminal
    $ oc <command>
    ```