{%- set _mod_docs_content_type = "CONCEPT" %}
# Telecom Grandmaster clocks on Intel Granite Rapids-D hardware {id="nw-ptp-granite-rapids-telecom-grandmaster-clock-overview_{{ context }}"}

Intel Granite Rapids-D (GNR-D) server platforms support Telecom Grandmaster (T-GM) clock deployments that use onboard Network Acceleration Complex (NAC) ports and optional Carter Flat expansion network interface cards (NICs) to share timing across a single GNSS feed.
Before you configure a T-GM profile on GNR-D hardware, verify that your qualified hardware layout, cabling, port counts, and interface naming align with your deployment requirements.
The associated procedure provides an example `PtpConfig` CR, `linuxptp` plugin expectations, and verification steps for Granite Rapids-D nodes. {._abstract}

In addition to Telecom Grandmaster configurations, Intel Granite Rapids-D (GNR-D) hardware supports a Precision Time Protocol (PTP) boundary clock profile without holdover.
For more information about boundary clock configuration on GNR-D hardware, see the Additional resources section.

{%- set FeatureName = "Telecom Grandmaster clocks on Intel Granite Rapids-D hardware" %}
{% include "./snippets/technology-preview.md" %}


:::note

Follower digital phase-locked loop (DPLL) behavior on GNR-D add-on network interface cards (NICs) such as Carter Flat cards is only partially visible through the Intel NIC driver: you can read high-level follower DPLL lock state (locked or not locked).
Intel does not plan to add interfaces that expose further follower DPLL lock accuracy in software or firmware.

The PTP Operator can surface follower DPLL lock state when the Intel NIC driver exposes it, but it cannot report additional follower DPLL accuracy metrics or diagnose follower DPLL problems on add-on NICs beyond that driver data.
Resolution of complex follower DPLL problems might require on-site hardware access and coordination with Intel rather than diagnosis inside {{ product_title }}.

:::



Physical architecture and timing paths

:   <a name="nw-ptp-granite-rapids-telecom-grandmaster-clock-overview-physical_{{ context }}"></a>

    GNSS receivers attach to the shared timing module on supported GNR-D systems so one antenna feed can discipline multiple time transmitters across NAC and Carter Flat ports.
    Compared with earlier Intel E810 Westport Channel layouts that relied on faceplate jumpers between cards, GNR-D routes synchronization between cards by using proprietary PCIe wiring instead of external jumper cables, which supports up to 24 time transmitter ports in the same server footprint when you combine onboard ports with two expansion cards.

On current Intel Granite Rapids-D platforms, a server can ship with zero, one, or two Carter Flat expansion cards. The example `PtpConfig` CR in the associated procedure reflects two cards.


Interface naming and the GNR-D MachineConfig

:   <a name="nw-ptp-granite-rapids-telecom-grandmaster-clock-overview-interfaces_{{ context }}"></a>

    Onboard NAC ports and Carter Flat ports can appear in the same kernel namespace, which makes Precision Time Protocol (PTP) metrics ambiguous unless interfaces are renamed with distinct prefixes.
    A common layout applies the MachineConfig manifest `10-rename-gnrd-interfaces-master.yaml` so each card presents a unique interface prefix before you apply a Telecom Grandmaster `PtpConfig` CR.