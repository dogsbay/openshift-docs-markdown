{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a highBurst profile {id="virt-configuring-highburst-profile_{{ context }}"}

You can use the `highBurst` profile to create and maintain a large number of virtual machines (VMs) in one cluster. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

*   Apply the following patch to enable the `highBurst` tuning policy profile:
    ```terminal {minja}
    $ oc patch {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }} \
      --type=json -p='[{"op": "add", "path": "/spec/tuningPolicy", \
      "value": "highBurst"}]'
    ```

**Verification**

*   Run the following command to verify the `highBurst` tuning policy profile is enabled:
    ```terminal
    $ oc get kubevirt.kubevirt.io/kubevirt-kubevirt-hyperconverged \
      -n {CNVNamespace} -o go-template --template='{{range $config, \
      $value := .spec.configuration}} {{if eq $config "apiConfiguration" \
      "webhookConfiguration" "controllerConfiguration" "handlerConfiguration"}} \
      {{"\n"}} {{$config}} = {{$value}} {{end}} {{end}} {{"\n"}}
    ```