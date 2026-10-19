{%- set _mod_docs_content_type = "REFERENCE" %}
# Life cycle dates {id="sd-life-cycle-dates_{{ context }}"}

The following table lists the general availability, maintenance support end date, and Extended Update Support Add-On - Term 1 end date for each supported {{ product_title }} version. {._abstract}

| Version | General availability | Maintenance support ends | Extended Update Support Add-On - Term 1 ends |
| --- | --- | --- | --- |
| 4.22 | Jun  9, 2026 | Dec 31, 2027 | Jun 30, 2028 |
| 4.21 | Feb  4, 2026 | Aug  3, 2027 |  |
| 4.20 | Oct 21, 2025 | Apr 21, 2027 | Oct 21, 2027 |
| 4.19 | Jun 17, 2025 | Dec 17, 2026 |  |
| 4.18 | Feb 25, 2025 | Aug 25, 2026 | Feb 25, 2027 |

The Extended Update Support Add-On - Term 1 is available for {{ product_title }} customers using even-numbered versions, starting with 4.16, and is included with your {{ product_title }} subscription.

The Extended Update Support Add-On - Term 1 provides the key benefit of extending the support lifecycle for an eligible minor release from 18 months to a total of 24 months. This 6-month extension allows organizations to maintain stability for mission-critical applications, meet complex regulatory validation schedules, and manage limited maintenance windows by providing continued access to critical and important security updates and urgent-priority bug fixes without requiring a full version upgrade.

To apply Extended Update Support Add-On - Term 1 to your {{ product_title }} cluster, you must update the channel group to `eus`.

{%- if openshift_rosa_hcp %}

:::important

Before upgrading your cluster from version 4.16 to version 4.18, confirm that your control plane and machines pools are using version 4.16.
See _Upgrade options for {{ product_title }} clusters_ in the _Additional resources_ section for more information.

:::

{%- endif %}