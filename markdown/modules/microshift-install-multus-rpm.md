{%- set _mod_docs_content_type = "PROCEDURE" %}
# Install the multiple networks plugin {id="microshift-installing-multus_{{ context }}"}

You can install the {{ microshift_short }} Multus Container Network Interface (CNI) plugin alongside a new {{ microshift_short }} installation. If you want to attach additional networks to a pod for high-performance network configurations, install the `microshift-multus` RPM package. {._abstract}


:::important

The {{ microshift_short }} Multus CNI plugin manifests are included in the {{ microshift_short }} binary. To enable multiple networks, you can either set the value in the {{ microshift_short }} `config.yaml` file to `Enabled`, or use the configuration snippet in the `microshift-multus` RPM. Uninstalling the {{ microshift_short }} Multus CNI is not supported in either case.

:::


**Procedure**

*   Install the Multus RPM package by running the following command:
    ```terminal
    $ sudo dnf install microshift-multus
    ```

    :::tip

    If you create your custom resources (CRs) while you are completing your installation of {{ microshift_short }}, you can avoid restarting the service to apply them.
    
    :::


**Next steps**

*   Continue with your new {{ microshift_short }} installation, including any add-ons.
*   Create the custom resources (CRs) needed for your {{ microshift_short }} Multus CNI plugin.
*   Configure other networking CNIs as needed.
*   After you have finished installing all of the RPMs that you want to include, start the {{ microshift_short }} service. The {{ microshift_short }} Multus CNI plugin is automatically deployed.