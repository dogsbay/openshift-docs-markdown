{%- set _mod_docs_content_type = "PROCEDURE" %}
# Restoring a degraded {{ insights_operator }} {id="connected-to-disconnected-restore-insights_{{ context }}"}

Disconnecting the cluster from the network necessarily causes the cluster to lose the Internet connection. The {{ insights_operator }} becomes degraded because it requires access to {{ red_hat_lightspeed }}. {._abstract}

For more information, see documentation on "{{ red_hat_lightspeed }}".

Use the following procedure to recover from a degraded {{ insights_operator }}.

**Procedure**

1.  Edit your `.dockerconfigjson` file to remove the `cloud.openshift.com` entry, for example:
    ```terminal
    "cloud.openshift.com":{"auth":"<hash>","email":"user@example.com"}
    ```
1.  Save the file.
1.  Update the cluster secret with the edited `.dockerconfigjson` file:
    ```terminal
    $ oc set data secret/pull-secret -n openshift-config --from-file=.dockerconfigjson=./.dockerconfigjson
    ```
1.  Verify that the {{ insights_operator }} is no longer degraded:
    ```terminal
    $ oc get co insights
    ```
    ```terminal title="Example output"
    NAME       VERSION   AVAILABLE   PROGRESSING   DEGRADED   SINCE
    insights   4.5.41    True        False         False      3d
    ```