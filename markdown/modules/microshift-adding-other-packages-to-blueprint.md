{%- set _mod_docs_content_type = "PROCEDURE" %}
# Add other packages to a blueprint {id="microshift-adding-other-services-to-blueprint_{{ context }}"}

Add the references for optional RPM packages to your `ostree` blueprint to enable them. {._abstract}

**Prerequisites**

*   You created an image builder blueprint file.

**Procedure**

1.  Edit your `ostree` blueprint by running the following command:
    ```terminal
    $ vi __<microshift_blueprint.toml>__
    ```

    Replace `_<microshift_blueprint.toml>_` with the name of the blueprint file used for the {{ microshift_short }} service.
1.  Add the following example text to your blueprint:
    ```text
    [[packages]]
    name = "__<microshift_additional_package_name>__"
    version = "*"
    ```
    *   `\<a name="packages"></a> name =` Include one stanza for each additional service that you want to add. For example, replace `_<microshift_additional_package_name>_` in with the name the RPM for the service you want to include such as `microshift-olm`. Add another stanza as needed.

**Next steps**

1.  Add custom certificate authorities to the blueprint as needed. For more information, see the following links:
    *   [Using Shared System Certificates ({{ op_system_base }} 9)](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/securing_networks/using-shared-system-certificates_securing-networks)
    *   [Supported image customizations ({{ op_system_base }} 9)](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/composing_a_customized_rhel_system_image/creating-system-images-with-composer-command-line-interface_composing-a-customized-rhel-system-image#image-customizations_creating-system-images-with-composer-command-line-interface)
    *   [Creating and managing OSTree image updates](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/composing_installing_and_managing_rhel_for_edge_images/creating-and-managing-ostree-image-updates_composing-installing-managing-rhel-for-edge-images)
1.  After you finish adding to your blueprint, you can apply the manifests to an active node by building a new {{ op_system_ostree }} system and deploying it on the client:
    *   Create the ISO.
    *   Add the blueprint and build the ISO.
    *   Download the ISO and prepare it for use.
    *   Do any provisioning that is needed.