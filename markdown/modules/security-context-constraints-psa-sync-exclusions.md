{%- set _mod_docs_content_type = "CONCEPT" %}
# Pod security admission synchronization namespace exclusions {id="security-context-constraints-psa-sync-exclusions_{{ context }}"}

If you use pod security admission synchronization, the system-created namespaces are permanently disabled from synchronization. {._abstract}

{% if not (openshift_dedicated or openshift_rosa) %}
User-created `openshift-*` prefixed namespaces are also initially disabled, but you can enable synchronization on them later.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
User-created `openshift-*` prefixed namespaces are also permanently excluded.
{% endif %}

{% if not (openshift_dedicated or openshift_rosa) %}

:::important

If a pod security admission label (`pod-security.kubernetes.io/<mode>`) is manually modified from the automatically labeled value on a label-synchronized namespace, synchronization is disabled for that label.

If necessary, you can enable synchronization again by using one of the following methods:

*   By removing the modified pod security admission label from the namespace
*   By setting the `security.openshift.io/scc.podSecurityLabelSync` label to `true`

    If you force synchronization by adding this label, then any modified pod security admission labels will be overwritten.

:::


## Permanently disabled namespaces {id="_permanently_disabled_namespaces"}
{% endif %}

Namespaces that are defined as part of the cluster payload have pod security admission synchronization disabled permanently. The following namespaces are permanently disabled:

*   `default`
*   `kube-node-lease`
*   `kube-system`
*   `kube-public`
*   `openshift`
*   All system-created namespaces that are prefixed with `openshift-`
{%- if not (openshift_dedicated or openshift_rosa) %}
, except for `openshift-operators`
{%- endif %}

{% if not (openshift_dedicated or openshift_rosa) %}

## Initially disabled namespaces {id="_initially_disabled_namespaces"}

By default, all namespaces that have an `openshift-` prefix have pod security admission synchronization disabled initially. You can enable synchronization for user-created `openshift-*` namespaces and for the `openshift-operators` namespace.


:::note

You cannot enable synchronization for any system-created `openshift-*` namespaces, except for `openshift-operators`.

:::


If an Operator is installed in a user-created `openshift-*` namespace, synchronization is enabled automatically after a cluster service version (CSV) is created in the namespace. The synchronized label is derived from the permissions of the service accounts in the namespace.
{% endif %}