{%- set _mod_docs_content_type = "CONCEPT" %}
# Self-service Technical Supportability Review {id="about-self-service-tsr_{{ context }}"}

You can use the self-service Technical Supportability Review (TSR) on the Red&#160;Hat Customer Portal to validate your cluster configuration against Red&#160;Hat common practices. {._abstract}


:::note

The `must-gather` tool collects diagnostic information about your cluster, including resource definitions, service logs, and configuration data. For more information, see "Gathering data about your cluster" in the {{ product_title }} documentation.

:::


The self-service TSR uses AI to evaluate your cluster’s `must-gather` data and provides a prioritized executive summary of recommendations. This serves as a starting point to help you identify and resolve potential issues before they impact your environment.

The TSR performs hundreds of checks across the {{ product_title }} platform, including {{ VirtProductName }}. Coverage is continually expanding.

## When to use the self-service TSR tool {id="when-to-use-self-service-tsr_{{ context }}"}

Integrating the self-service TSR into your regular operational workflow can be helpful in the following scenarios:


Routine benchmarking
:   Use the TSR quarterly to benchmark cluster health and plan for routine maintenance activities.


Pre-flight checks
:   Validate your cluster configuration before major structural changes, including upgrades, migrations, and expansions.


Critical event preparation
:   Confirm cluster stability ahead of high-traffic business events, such as seasonal peaks, or operational milestones, such as year-end shutdowns, business continuity drills, and compliance audits.

## How to access the TSR {id="how-to-access-tsr_{{ context }}"}

To run a self-service review, upload your cluster’s `must-gather` data to the **Analyze** tab in the **Support** section of the Red&#160;Hat Customer Portal. For a direct link, see "Technical Supportability Review with AI tool" in the Additional resources section. The **Analyze** feature generates a prioritized executive summary that identifies your cluster’s top risks and recommends corrective actions. Review the recommendations and implement the suggested corrective actions to address the identified risks.

The self-service TSR provides a solid baseline for cluster health. If you need additional guidance or a more comprehensive review, contact your Red&#160;Hat account team to arrange an assisted review through a Technical Account Manager (TAM) or Red&#160;Hat consultant. An assisted review includes human analysis, deeper coverage, and access to checks that are updated more frequently than the self-service version.

**Additional resources**
{._additional-resources}

*   [Technical Supportability Review with AI tool](https://access.redhat.com/support/cases/#/analyze)
*   [Red&#160;Hat Technical Supportability Review with AI: Proactive AI-Driven Cluster Assessments for {{ product_title }}](https://access.redhat.com/solutions/7141255)