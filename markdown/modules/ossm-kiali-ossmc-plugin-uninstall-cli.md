{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling OpenShift Service Mesh Console plugin using the CLI {id="ossm-kiali-ossmc-plugin-uninstall-cli_{{ context }}"}

You can uninstall the {{ SMPlugin }} by using the {{ oc_first }}.

**Procedure**

1.  Remove the `OSSMC` custom resource (CR) by running the following command:
    ```terminal
     oc delete ossmconsoles <custom_resource_name> -n <custom_resource_namespace>
    ```
1.  Verify all CRs are deleted from all namespaces by running the following command:
    ```terminal
    for r in $(oc get ossmconsoles --ignore-not-found=true --all-namespaces -o custom-columns=NS:.metadata.namespace,N:.metadata.name --no-headers | sed 's/  */:/g'); do oc delete ossmconsoles -n $(echo $r|cut -d: -f1) $(echo $r|cut -d: -f2); done
    ```