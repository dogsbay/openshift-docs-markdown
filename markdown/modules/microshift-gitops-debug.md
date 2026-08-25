{%- set _mod_docs_content_type = "PROCEDURE" %}
# Debug {{ gitops }} with oc adm inspect {id="microshift-gitops-debug_{{ context }}"}

If you have problems with your Argo CD for {{ microshift_short }} {{ gitops_title }} controller, you can use the {{ oc_first }} tool to inspect it for errors. {._abstract}

**Prerequisites**

*   The `oc` command-line tool is installed.

**Procedure**

*   Run the `oc adm inspect` command when in the {{ gitops }} namespace:
    ```terminal
    $ oc adm inspect ns/openshift-gitops
    ```
    ```terminal title="Example output"
    Gathering data for ns/openshift-gitops...
    W0501 20:34:35.978508 57625 util.go:118] the server doesn't have a resource type egressfirewalls, skipping the inspection
    W0501 20:34:35.980881 57625 util.go:118] the server doesn't have a resource type egressqoses, skipping the inspection
    W0501 20:34:36.040664 57625 util.go:118] the server doesn't have a resource type servicemonitors, skipping the inspection
    Wrote inspect data to inspect.local.2673575938140296280.
    ```

**Next steps**

*   If `oc adm inspect` did not show the information you need, you can run an sos report.