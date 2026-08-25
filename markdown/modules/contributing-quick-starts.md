{%- set _mod_docs_content_type = "PROCEDURE" %}
# Contributing quick starts {id="contributing-quick-starts_{{ context }}"}

{{ product_title }} introduces the quick start custom resource, which is defined by a `ConsoleQuickStart` object. Operators and administrators can use this resource to contribute quick starts to the cluster. {._abstract}

**Prerequisites**

*   You must have cluster administrator privileges.

**Procedure**

1.  To create a new quick start, run:
    ```yaml
    $ oc get -o yaml consolequickstart spring-with-s2i > my-quick-start.yaml
    ```
1.  Run:
    ```yaml
    $ oc create -f my-quick-start.yaml
    ```
1.  Update the YAML file using the guidance outlined in this documentation.
1.  Save your edits.