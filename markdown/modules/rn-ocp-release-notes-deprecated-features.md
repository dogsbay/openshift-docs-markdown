{%- set _mod_docs_content_type = "REFERENCE" %}
# Deprecated features {id="rn-ocp-release-notes-deprecated-features_{{ context }}"}


Deprecation of Fujitsu Integrated Remote Management Controller (iRMC) driver for bare-metal machines
:   As of {{ product_title }} 4.21, support for the Fujitsu iRMC baseboard management controller (BMC) driver has been deprecated and will be removed in a future release.
    If a `BareMetalHost` resource contains a BMC address with `irmc://` as its URI scheme, the resource must be updated to use another BMC scheme, such as `redfish://` or `ipmi://`.
    Once support for this driver is removed, hosts that use `irmc://` URI schemes will become unmanageable.

    For information about updating the `BareMetalHost` resource, see [Editing a BareMetalHost resource](/installing/installing_bare_metal/bare-metal-postinstallation-configuration#bmo-editing-a-baremetalhost-resource_bare-metal-postinstallation-configuration).


Deprecation of the `oc adm release mirror` command
:   As of {{ product_title }} 4.22, using the `oc adm release mirror` command to mirror release images has been deprecated and will be removed in a future release.

    As an alternative, use the [oc-mirror plugin v2](/disconnected/about-installing-oc-mirror-v2#about-installing-oc-mirror-v2).


Deprecation of adding kernel modules to nodes with KVC
:   As of {{ product_title }} 4.22, support for adding kernel modules to nodes with kmods-via-containers software (KVC) has been deprecated and will be removed in a future release.


Deprecation of the runC container runtime
:   As of {{ product_title }} 4.22, support for using the runC container runtime is deprecated and will be removed in a future release.