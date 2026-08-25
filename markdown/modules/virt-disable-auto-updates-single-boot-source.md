{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling automatic updates for a single boot source {id="virt-disable-auto-updates-single-boot-source_{{ context }}"}

You can disable automatic updates for an individual boot source, whether it is custom or system-defined, by editing the `HyperConverged` custom resource (CR). {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Open the `HyperConverged` CR in your default editor by running the following command:
    ```terminal
    $ oc edit {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }}
    ```
1.  Disable automatic updates for an individual boot source by editing the `spec.dataImportCronTemplates` field.

    Custom boot source
:   *   Remove the boot source from the `spec.dataImportCronTemplates` field. Automatic updates are disabled for custom boot sources by default.


    System-defined boot source
:   1.  Add the boot source to `spec.dataImportCronTemplates`.

    :::note


    Automatic updates are enabled by default for system-defined boot sources, but these boot sources are not listed in the CR unless you add them.
    
    :::

    1.  Set the value of the `dataimportcrontemplate.kubevirt.io/enable` annotation to ’false'`.

    For example:
    ```yaml
    apiVersion: hco.kubevirt.io/v1beta1
    kind: HyperConverged
    metadata:
      name: kubevirt-hyperconverged
    spec:
      dataImportCronTemplates:
      - metadata:
          annotations:
            dataimportcrontemplate.kubevirt.io/enable: 'false'
          name: rhel8-image-cron
    # ...
    ```
1.  Save the file.