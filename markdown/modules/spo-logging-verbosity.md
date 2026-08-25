{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring logging verbosity {id="logging-verbosity_{{ context }}"}

The Security Profiles Operator supports the default logging verbosity of `0` and an enhanced verbosity of `1`.  {._abstract}

**Procedure**

*   To enable enhanced logging verbosity, patch the `spod` configuration and adjust the value by running the following command:
    ```terminal
    $ oc -n openshift-security-profiles patch spod \
        spod --type=merge -p '{"spec":{"verbosity":1}}'
    ```
    ```terminal title="Example output"
    securityprofilesoperatordaemon.security-profiles-operator.x-k8s.io/spod patched
    ```