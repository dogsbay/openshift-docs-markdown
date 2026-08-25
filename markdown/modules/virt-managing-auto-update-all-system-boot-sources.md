{%- set _mod_docs_content_type = "PROCEDURE" %}
# Managing automatic updates for all system-defined boot sources {id="virt-managing-auto-update-all-system-boot-sources_{{ context }}"}

Disabling automatic boot source imports and updates can lower resource usage. In disconnected environments, disabling automatic boot source updates prevents `CDIDataImportCronOutdated` alerts from filling up logs. {._abstract}

To disable automatic updates for all system-defined boot sources, set the `enableCommonBootImageImport` field value to `false`. Disabling automatic updates deletes the associated `DataImportCron` objects. Setting this value to `true` turns automatic updates back on.


:::note

Custom boot sources are not affected by this setting.

:::


**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

*   Enable or disable automatic boot source updates by editing the `HyperConverged` custom resource (CR).
    *   To disable automatic boot source updates, set the `spec.enableCommonBootImageImport` field value in the `HyperConverged` CR to `false`. For example:
        ```terminal
        $ oc patch {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }} \
          --type json -p '[{"op": "replace", "path": \
          "/spec/enableCommonBootImageImport", \
          "value": false}]'
        ```
    *   To re-enable automatic boot source updates, set the `spec.enableCommonBootImageImport` field value in the `HyperConverged` CR to `true`. For example:
        ```terminal
        $ oc patch {{ HCOCliKind }} kubevirt-hyperconverged -n {{ CNVNamespace }} \
          --type json -p '[{"op": "replace", "path": \
          "/spec/enableCommonBootImageImport", \
          "value": true}]'
        ```