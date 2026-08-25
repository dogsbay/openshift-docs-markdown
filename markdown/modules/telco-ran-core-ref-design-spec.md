{%- set _mod_docs_content_type = "REFERENCE" %}
# Reference design scope {id="telco-ran-core-ref-design-spec_{{ context }}"}

The telco core, telco RAN and telco hub reference design specifications (RDS) capture the recommended, tested, and supported configurations to get reliable and repeatable performance for clusters running the telco core and telco RAN profiles. {._abstract}

Each RDS includes the released features and supported configurations that are engineered and validated for clusters to run the individual profiles.
The configurations provide a baseline {{ product_title }} installation that meets feature and KPI targets.
Each RDS also describes expected variations for each individual configuration.
Validation of each RDS includes many long duration and at-scale tests.


:::note

The validated reference configurations are updated for each major Y-stream release of {{ product_title }}.
Z-stream patch releases are periodically re-tested against the reference configurations.

:::