{%- set _mod_docs_content_type = "CONCEPT" %}
# About {{ oadp_short }} update channels {id="about-oadp-update-channels_{{ context }}"}

When you install an {{ oadp_short }} Operator, you choose an update channel. This channel determines which upgrades to the {{ oadp_short }} Operator and to Velero you receive. {._abstract}

The following update channels are available:

*   The **stable-1.3** channel contains `{{ oadp_short }}.v1.3.z`{minja}, the most recent {{ oadp_short }} 1.3 `ClusterServiceVersion`.
*   The **stable-1.4** channel contains `{{ oadp_short }}.v1.4.z`{minja}, the most recent {{ oadp_short }} 1.4 `ClusterServiceVersion`.
*   Starting with {{ oadp_short }} 1.5 on {{ product_title }} v4.19, {{ oadp_short }} reintroduces the **stable** channel which contains a single supported {{ oadp_short }} version for a particular {{ product_title }} version.

For more information, see _OpenShift Operator Life Cycles_.

**Which update channel is right for you?**

*   If you are already using the **stable** channel, you will continue to get updates from `{{ oadp_short }}.v1.5.z`{minja}.
*   Choose the **stable-1.y** update channel to install {{ oadp_short }} 1.y and to continue receiving patches for it. If you choose this channel, you will receive all z-stream patches for version 1.y.z.

**When must you switch update channels?**

*   If you have {{ oadp_short }} 1.y installed, and you want to receive patches only for that y-stream, you must switch from the **stable** update channel to the **stable-1.y** update channel. You will then receive all z-stream patches for version 1.y.z.
*   If you have {{ oadp_short }} 1.0 installed, want to upgrade to {{ oadp_short }} 1.1, and then receive patches only for {{ oadp_short }} 1.1, you must switch from the **stable-1.0** update channel to the **stable-1.1** update channel. You will then receive all z-stream patches for version 1.1.z.
*   If you have {{ oadp_short }} 1.y installed, with _y_ greater than 0, and want to switch to {{ oadp_short }} 1.0, you must uninstall your {{ oadp_short }} Operator and then reinstall it using the **stable-1.0** update channel. You will then receive all z-stream patches for version 1.0.z.


:::note

You cannot switch from {{ oadp_short }} 1.y to OADP 1.0 by switching update channels. You must uninstall the Operator and then reinstall it.

:::


**Additional resources**
{._additional-resources}

*   [OpenShift Operator Life Cycles](https://access.redhat.com/support/policy/updates/openshift_operators)