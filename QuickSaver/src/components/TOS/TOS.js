import React from 'react';
import { View, Image, SafeAreaView, ScrollView, Text } from 'react-native';
import { BackButton } from '../ui';
import styles from './styles';

const TOS = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.backButtonWrapper}>
          <BackButton onPress={() => props.navigation.pop()} />
        </View>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
          <Image
            style={styles.mainLogo}
            source={require('../../assets/Logo-Block.png')}
            />

          <Text style={styles.title}>TERMS OF USE</Text>
          <Text style={styles.boxedText}>
            PLEASE NOTE: Section X contains a Binding Arbitration Clause and Class Action Waiver that impact your rights about how to resolve any dispute with Quik$avers.  Please read it carefully. Thank you.
          </Text>


          <Text style={styles.label}>
            SECTION I. TERMS OF USE AGREEMENT
          </Text>

          <Text style={styles.p}>
            This Terms of Use Agreement (“Agreement”) constitutes a legally binding agreement made between you, whether personally or on behalf of an entity (“user” or “you”) and Quik$avers, LLC and its affiliated companies (collectively, “Company” or “we” or “us” or “our”), concerning your access to and use of the Quik$avers App and the www.Quik$avers.com website, as well as any other media form or media channel related or connected thereto (collectively, the “App and Website”).
          </Text>

          <Text style={styles.p}>
            Quik$avers is the next-generation go-to app for savvy shoppers (our Members), seeking everyday discounts & deals on a wide variety of products and services keyed to their special needs and interests. Quik$avers is also a unique low-cost advertising portal providing businesses of every size and type (our Partners) with an affordable marketing platform to reach new and repeat customers.
          </Text>

          <Text style={styles.p}>
            Supplemental terms and conditions or documents that may be posted on the Quik$avers App and/or Website from time to time, are hereby expressly incorporated into this Agreement by reference. 
          </Text>

          <Text style={styles.p}>
            Company makes no representation that the App and Website are appropriate or available in other locations other than where they are operated by Company. The information provided on the App and Website is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject Company to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the App and Website from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable. 
          </Text>

          <Text style={styles.p}>
            All users who are minors in the jurisdiction in which they reside (generally under the age of 18) are not permitted to register for the App and Website or use the Company Services.
          </Text>

          <Text style={styles.p}>
            YOU ACCEPT AND AGREE TO BE BOUND BY THIS AGREEMENT BY ACKNOWLEDGING SUCH ACCEPTANCE DURING THE REGISTRATION PROCESS (IF APPLICABLE) AND ALSO BY CONTINUING TO USE THE APP AND WEBSITE. IF YOU DO NOT AGREE TO ABIDE BY THIS AGREEMENT, OR TO MODIFICATIONS THAT COMPANY MAY MAKE TO THIS AGREEMENT IN THE FUTURE, DO NOT USE OR ACCESS OR CONTINUE TO USE OR ACCESS THE COMPANY SERVICES OR THE APP AND WEBSITE.    
          </Text>

          <Text style={styles.label}>
            SECTION II. USER REPRESENTATIONS
          </Text>

          <Text style={styles.label}>
            Regarding Your Registration
          </Text>

          <Text style={styles.p}>
            By using the Company Services, you represent and warrant that: 
          </Text>


          <Text style={styles.p}>
            A.	All registration information you submit is truthful and accurate.
          </Text>

          <Text style={styles.p}>
            B. 	You will maintain the accuracy of such information;
          </Text>

          <Text style={styles.p}>
            C. 	You will keep your password confidential and will be responsible for all use of your password and account;
          </Text>

          <Text style={styles.p}>
            D.	You understand and agree that a single login shared by multiple people is not permitted.
          </Text>

          <Text style={styles.p}>
            E.	Your use of the Company Services does not violate any applicable law or regulation.
          </Text>

          <Text style={styles.p}>
            You also agree to: (a) provide true, accurate, current and complete information about yourself as prompted by the App and Website’s registration form and (b) maintain and promptly update registration data to keep it true, accurate, current and complete. If you provide any information that is untrue, inaccurate, not current or incomplete, or Company has reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, Company has the right to suspend or terminate your account and refuse any and all current or future use of the App and Website (or any portion thereof). 
          </Text>

          <Text style={styles.p}>
            We reserve the right to remove or reclaim or change a user name you select if we determine appropriate in our discretion, such as when the user name is obscene or otherwise objectionable or when a trademark owner complains about a username that does not closely relate to a user's actual name.
          </Text>


          <Text style={styles.label}>
            SECTION III. MOBILE APPLICATION LICENSE
          </Text>

          <Text style={styles.label}>
            Use License
          </Text>

          <Text style={styles.p}>
            If you are accessing the Company Services via a mobile application, then Company grants you a revocable, non-exclusive, non-transferable, limited right to install and use the application on wireless handsets owned and controlled by you, and to access and use the application on such devices strictly in accordance with the terms and conditions of this license. You shall use the application strictly in accordance with the terms of this license and shall not: (a) decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the application; (b) make any modification, adaptation, improvement, enhancement, translation or derivative work from the application; (c) violate any applicable laws, rules or regulations in connection with your access or use of the application; (d) remove, alter or obscure any proprietary notice (including any notice of copyright or trademark) of Company or its affiliates, partners, suppliers or the licensors of the application; (e) use the application for any revenue generating endeavor, commercial enterprise, or other purpose for which it is not designed or intended; (f) make the application available over a network or other environment permitting access or use by multiple devices or users at the same time; (g) use the application for creating a product, service or software that is, directly or indirectly, competitive with or in any way a substitute for the application; (h) use the application to send automated queries to any website or to send any unsolicited commercial e-mail; or (i) use any proprietary information or interfaces of Company or other intellectual property of Company in the design, development, manufacture, licensing or distribution of any applications, accessories or devices for use with the application.
          </Text>

          <Text style={styles.label}>
            Terms Applicable to Apple and Android Devices
          </Text>

          <Text style={styles.p}>
            The following terms apply when you use a mobile application obtained from either the Apple Store or Google Play to access the Company Services. You acknowledge that this Agreement is concluded between you and Company only, and not with Apple Inc. or Google, Inc. (each an “App Distributor”), and Company, not an App Distributor, is solely responsible for the Company application and the content thereof. (1) SCOPE OF LICENSE: The license granted to you for the Company application is limited to a non-transferable license to use the Company application on a device that utilizes the Apple iOS or Android operating system, as applicable, and in accordance with the usage rules set forth in the applicable App Distributor terms of service. (2) MAINTENANCE AND SUPPORT: Company is solely responsible for providing any maintenance and support services with respect to the Company application, as specified in this Agreement, or as required under applicable law. You acknowledge that each App Distributor has no obligation whatsoever to furnish any maintenance and support services with respect to the Company application. (3) WARRANTY: Company is solely responsible for any product warranties, whether express or implied by law, to the extent not effectively disclaimed. In the event of any failure of the Company application to conform to any applicable warranty, you may notify an App Distributor, and the App Distributor, in accordance with its terms and policies, may refund the purchase price, if any, paid for the Company application, and to the maximum extent permitted by applicable law, an App Distributor will have no other warranty obligation whatsoever with respect to the Company application, and any other claims, losses, liabilities, damages, costs or expenses attributable to any failure to conform to any warranty will be Company’s sole responsibility. (4) PRODUCT CLAIMS: You acknowledge that Company, not an App Distributor, is responsible for addressing any claims of yours or any third party relating to the Company application or your possession and/or use of the Company application, including, but not limited to: (i) product liability claims; (ii) any claim that the Company application fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection or similar legislation. (5) INTELLECTUAL PROPERTY RIGHTS: You acknowledge that, in the event of any third party claim that the Company application or your possession and use of the Company application infringes a third party’s intellectual property rights, the App Distributor will not be responsible for the investigation, defense, settlement and discharge of any such intellectual property infringement claim. (6) LEGAL COMPLIANCE: You represent and warrant that (i) you are not located in a country that is subject to a U.S. government embargo, or that has been designated by the U.S. government as a “terrorist supporting” country; and (ii) you are not listed on any U.S. government list of prohibited or restricted parties. (7) THIRD PARTY TERMS OF AGREEMENT: You must comply with applicable third party terms of agreement when using the Company application, e.g., if you have a VoIP application, then you must not be in violation of their wireless data service agreement when using the Company application. (8) THIRD PARTY BENEFICIARY: Company and you acknowledge and agree that the App Distributors, and their subsidiaries, are third party beneficiaries of this Agreement, and that, upon your acceptance of the terms and conditions of this Agreement, each App Distributor will have the right (and will be deemed to have accepted the right) to enforce this Agreement against you as a third party beneficiary thereof.
          </Text>


          <Text style={styles.label}>
            SUBMISSIONS
          </Text>

          <Text style={styles.p}>
            You acknowledge and agree that any questions, comments, suggestions, ideas, feedback or other information about the App and Website or the Company Services ("Submissions") provided by you to Company are non-confidential and Company (as well as any designee of Company) shall be entitled to the unrestricted use and dissemination of these Submissions for any purpose, commercial or otherwise, without acknowledgment or compensation to you.
          </Text>

          <Text style={styles.label}>
            SECTION IV. PROHIBITED ACTIVITIES
          </Text>

          <Text style={styles.p}>
            You may not access or use the App and Website for any other purpose other than that for which Company makes it available. The App and Website may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by Company. Prohibited activity includes, but is not limited to:  
          </Text>


          <Text style={styles.p}>
            A. 	Attempting to bypass any measures of the App and Website designed to prevent or restrict access to the App and Website, or any portion of thereof;
          </Text>

          <Text style={styles.p}>
            B.	Attempting to impersonate another user or person or using the username of another user 
          </Text>

          <Text style={styles.p}>
            C.	Criminal or tortious activity;
          </Text>

          <Text style={styles.p}>
            D. 	Deciphering, decompiling, disassembling or reverse engineering any of the software comprising or in any way	making up a part of the App and Website; 
          </Text>

          <Text style={styles.p}>
            E. 	Engaging in any automated use of the system, such as using any data mining, robots or similar data gathering and	extraction tools; 
          </Text>

          <Text style={styles.p}>
            F. 	Deleting the copyright or other proprietary rights notice from any App and Website content;
          </Text>

          <Text style={styles.p}>
            G. 	Except as may be the result of standard search engine or Internet browser usage, using or launching, developing or distributing any automated system, including, without limitation, any spider, robot (or "bot"), cheat utility, scraper or offline reader that accesses the App and Website, or using or launching any unauthorized script or other software;
          </Text>

          <Text style={styles.p}>
            H. 	Harassing, annoying, intimidating or threatening any Company employees or agents engaged in providing any portion of the Company Services to you;
          </Text>

          <Text style={styles.p}>
            I. 	Interfering with, disrupting, or creating an undue burden on the App and Website or the networks or services connected to the App and Website; 
          </Text>

          <Text style={styles.p}>
            J. 	Making any unauthorized use of the Company Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses; 
          </Text>

          <Text style={styles.p}>
            K. 	Selling or otherwise transferring your profile; 
          </Text>

          <Text style={styles.p}>
            L. 	Systematic retrieval of data or other content from the App and Website to create or compile, directly or indirectly, a collection, compilation, database or directory without written permission from Company; 
          </Text>

          <Text style={styles.p}>
            M. 	Tricking, defrauding or misleading Company and other users, especially in any attempt to learn sensitive account information such as passwords; 
          </Text>

          <Text style={styles.p}>
            N. 	Using any information obtained from the App and Website in order to harass, abuse, or harm another person; 
          </Text>

          <Text style={styles.p}>
            O. 	Using the Company Services as part of any effort to compete with Company or to provide services as a service bureau; 
          </Text>

          <Text style={styles.p}>
            P. 	Using the App and Website in a manner inconsistent with any and all applicable laws and regulations. 
          </Text>


          <Text style={styles.label}>
            SECTION V. INTELLECTUAL PROPERTY RIGHTS
          </Text>

          <Text style={styles.p}>
            The content on the App and Website (“Company Content”) and the trademarks, service marks and logos contained therein (“Marks”) are owned by or licensed to the Company, and are subject to copyright and other intellectual property rights under United States and foreign laws and international conventions. Company Content, includes, without limitation, all source code, databases, functionality, software, App and Website designs, audio, video, text, photographs and graphics. All Company graphics, logos, designs, page headers, button icons, scripts and service names are registered trademarks, common law trademarks or trade dress of the Company in the United States and/or other countries. Company's trademarks and trade dress may not be used, including as part of trademarks and/or as part of domain names, in connection with any product or service in any manner that is likely to cause confusion and may not be copied, imitated, or used, in whole or in part, without the prior written permission of the Company. 
          </Text>

          <Text style={styles.p}>
            Company Content on the App and Website is provided to you “AS IS” for your information and personal use only and may not be used, copied, reproduced, aggregated, distributed, transmitted, broadcast, displayed, sold, licensed, or otherwise exploited for any other purposes whatsoever without the prior written consent of the respective owners. Provided that you are eligible to use the App and Website, you are granted a limited license to access and use the App and Website and the Company Content and to download or print a copy of any portion of the Company Content to which you have properly gained access solely for your personal, non-commercial use. Company reserves all rights not expressly granted to you in and to the App and Website and Company Content and Marks.
          </Text>

          <Text style={styles.label}>
            SECTION VI. THIRD PARTY WEBSITES AND CONTENT
          </Text>

          <Text style={styles.p}>
            The App and Website contain (or you may be sent through the App and Website or the Company Services) links to other websites ("Third Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software and other content or items belonging to or originating from third parties (the "Third Party Content"). Such Third Party Websites and Third Party Content are not investigated, monitored or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third Party Websites accessed through the App and Website or any Third Party Content posted on, available through or installed from the App and Website, including the content, accuracy, offensiveness, opinions, reliability, privacy practices or other policies of or contained in the Third Party Websites or the Third Party Content. Inclusion of, linking to or permitting the use or installation of any Third-Party Website or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the App and Website and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware that our terms and policies no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the App and Website or relating to any applications you use or install from the App and Website. Any purchases you make through Third Party Websites will be through other websites and from other companies, and Company takes no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party.
          </Text>

          <Text style={styles.label}>
            SECTION VII. SITE MANAGEMENT
          </Text>

          <Text style={styles.p}>
            Company reserves the right but does not have the obligation to:
          </Text>


          <Text style={styles.p}>
            A. 	Monitor the App and Website for violations of this Agreement;
          </Text>


          <Text style={styles.p}>
            B. 	Take appropriate legal action against anyone who, in Company’s sole discretion, violates this Agreement, including without limitation, reporting such user to law enforcement authorities;
          </Text>


          <Text style={styles.p}>
            C. 	In Company’s sole discretion and without limitation, refuse, restrict access to or availability of, or disable (to the extent technologically feasible) any user’s contribution or any portion thereof that may violate this Agreement or any Company policy;
          </Text>


          <Text style={styles.p}>
            D. 	In Company’s sole discretion and without limitation, notice or liability to remove from the Website or otherwise disable all files and content that are excessive in size or are in any way burdensome to Company’s systems;
          </Text>


          <Text style={styles.p}>
            E. 	Otherwise manage the App and Website in a manner designed to protect the rights and property of Company and others and to facilitate the proper functioning of the App and Website.
          </Text>

          <Text style={styles.label}>
            SECTION VIII. TERM AND TERMINATION
          </Text>

          <Text style={styles.p}>
            This Agreement shall remain in full force and effect while you use the App and Website or are otherwise a user or member of the App and Website, as applicable. You may inactivate your account by contacting Quik$avers at any time.
          </Text>

          <Text style={styles.p}>
            WITHOUT LIMITING ANY OTHER PROVISION OF THIS AGREEMENT, COMPANY RESERVES THE RIGHT TO, IN COMPANY’S SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE APP AND WEBSITE AND THE COMPANY SERVICES, TO ANY PERSON FOR ANY REASON OR FOR NO REASON AT ALL, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY OR COVENANT CONTAINED IN THIS AGREEMENT, OR OF ANY APPLICABLE LAW OR REGULATION, AND COMPANY MAY TERMINATE YOUR USE OR PARTICIPATION IN THE APP AND WEBSITE AND THE COMPANY SERVICES, DELETE YOUR PROFILE AND ANY CONTENT OR INFORMATION THAT YOU HAVE POSTED AT ANY TIME, WITHOUT WARNING, IN COMPANY’S SOLE DISCRETION. 
          </Text>

          <Text style={styles.p}>
            In order to protect the integrity of the App and Website and Company Services, Company reserves the right at any time in its sole discretion to block certain IP addresses from accessing the App and Website and Company Services.
          </Text>

          <Text style={styles.p}>
            Any provisions of this Agreement that, in order to fulfill the purposes of such provisions, need to survive the termination or expiration of this Agreement, shall be deemed to survive for as long as necessary to fulfill such purposes.
          </Text>

          <Text style={styles.p}>
            YOU UNDERSTAND THAT CERTAIN STATES ALLOW YOU TO CANCEL THIS AGREEMENT, WITHOUT ANY PENALTY OR OBLIGATION, AT ANY TIME PRIOR TO MIDNIGHT OF COMPANY’S THIRD BUSINESS DAY FOLLOWING THE DATE OF THIS AGREEMENT, EXCLUDING SUNDAYS AND HOLIDAYS. TO CANCEL, CALL A COMPANY CUSTOMER CARE REPRESENTATIVE DURING NORMAL BUSINESS HOURS USING THE CONTACT INFORMATION LISTED BELOW IN THIS AGREEMENT OR BY ACCESSING YOUR ACCOUNT SETTINGS. THIS SECTION APPLIES ONLY TO INDIVIDUALS RESIDING IN STATES WITH SUCH LAWS.
          </Text>

          <Text style={styles.p}>
            If Company terminates or suspends your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, Company reserves the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
          </Text>

          <Text style={styles.label}>
            SECTION IX. MODIFICATIONS
          </Text>


          <Text style={styles.label}>
            To Agreement
          </Text>

          <Text style={styles.p}>
            Company may modify this Agreement from time to time. Any and all changes to this Agreement will be posted on the App and Website and revisions will be indicated by date. You agree to be bound to any changes to this Agreement when you use the Company Services after any such modification becomes effective. Company may also, in its discretion, choose to alert all users with whom it maintains email information of such modifications by means of an email to their most recently provided email address. It is therefore important that you regularly review this Agreement and keep your contact information current in your account settings to ensure you are informed of changes. You agree that you will periodically check the App and Website for updates to this Agreement and you will read the messages we send you to inform you of any changes. Modifications to this Agreement shall be effective after posting. 
          </Text>

          <Text style={styles.label}>
            To Services
          </Text>

          <Text style={styles.p}>
            Company reserves the right at any time to modify or discontinue, temporarily or permanently, the Company Services (or any part thereof) with or without notice. You agree that Company shall not be liable to you or to any third party for any modification, suspension or discontinuance of the Company Services. 
          </Text>

          <Text style={styles.label}>
            SECTION X. DISPUTE RESOLUTION & BINDING ARBITRATION
          </Text>

          <Text style={styles.label}>
            Between Users
          </Text>

          <Text style={styles.p}>
            If there is a dispute between users of the App and Website, or between users and any third party, you understand and agree that Company is under no obligation to become involved. In the event that you have a dispute with one or more other users, you hereby release Company, its officers, employees, agents and successors in rights from claims, demands and damages (actual and consequential) of every kind or nature, known or unknown, suspected and unsuspected, disclosed and undisclosed, arising out of or in any way related to such disputes and/or the Company Services.  
          </Text>

          <Text style={styles.label}>
            With Company
          </Text>

          <Text style={styles.p}>
            The primary advantage of arbitration versus litigation (lawsuits) is that arbitration prevents users from bringing class action lawsuits.
          </Text>

          <Text style={styles.p}>
            A. Governing Law; Jurisdiction. This Agreement and all aspects of the App and Website and Company Services shall be governed by and construed in accordance with the internal laws of the State of Arizona, without regard to conflict of law provisions. With respect to any disputes or claims not subject to informal dispute resolution or arbitration (as set forth below), you agree not to commence or prosecute any action in connection therewith other than in the state and federal courts located in Maricopa County, Arizona, and you hereby consent to, and waive all defenses of lack of personal jurisdiction and forum non conveniens with respect to, venue and jurisdiction in such state and federal courts. Application of the United Nations Convention on Contracts for the International Sale of Goods is excluded from this Agreement. Additionally, application of the Uniform Computer Information Transaction Act (UCITA) is excluded from this Agreement. In no event shall any claim, action or proceeding by you related in any way to the App and Website or Company Services be instituted more than Two (2) Years after the cause of action arose.
          </Text>

          <Text style={styles.p}>
            B. Informal Resolution. To expedite resolution and control the cost of any dispute, controversy or claim related to this Agreement ("Dispute"), you and Company agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least sixty (60) days before initiating any arbitration or court proceeding. Such informal negotiations commence upon written notice from one person to the other.
          </Text>

          <Text style={styles.p}>
            C. Binding Arbitration. If you and Company are unable to resolve a Dispute through informal negotiations, either you or Company may elect to have the Dispute (except those Disputes expressly excluded below) finally and exclusively resolved by binding arbitration. Any election to arbitrate by one party shall be final and binding on the other. YOU UNDERSTAND THAT ABSENT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL. The arbitration shall be commenced and conducted under the Commercial Arbitration Rules of the American Arbitration Association ("AAA") and, where appropriate, the AAA’s Supplementary Procedures for Consumer Related Disputes ("AAA Consumer Rules"), both of which are available at the AAA website www.adr.org. The determination of whether a Dispute is subject to arbitration shall be governed by the Federal Arbitration Act and determined by a court rather than an arbitrator. Your arbitration fees and your share of arbitrator compensation shall be governed by the AAA Consumer Rules and, where appropriate, limited by the AAA Consumer Rules. The arbitration may be conducted in person, through the submission of documents, by phone or online. The arbitrator will make a decision in writing but need not provide a statement of reasons unless requested by a party. The arbitrator must follow applicable law, and any award may be challenged if the arbitrator fails to do so. Except where otherwise required by the applicable AAA rules or applicable law, the arbitration will take place in Maricopa County, Arizona. Except as otherwise provided in this Agreement, you and Company may litigate in court to compel arbitration, stay proceedings pending arbitration, or to confirm, modify, vacate or enter judgment on the award entered by the arbitrator.
          </Text>

          <Text style={styles.p}>
            D. Restrictions/Class Action Waiver. You and Company agree that any arbitration shall be limited to the Dispute between Company and you individually. To the full extent permitted by law,
          </Text>


          <Text style={styles.p}>(1) no arbitration shall be joined with any other;</Text>

          <Text style={styles.p}>
            (2) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and
          </Text>

          <Text style={styles.p}>
            (3) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
          </Text>

          <Text style={styles.p}>
            E. Exceptions to Informal Negotiations and Arbitration. You and Company agree that the following Disputes are not subject to the above provisions concerning informal negotiations and binding arbitration:
          </Text>

          <Text style={styles.p}>
            (1) any Disputes seeking to enforce or protect, or concerning the validity of any of your or Company’s intellectual property rights;
          </Text>

          <Text style={styles.p}>
            (2) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy or unauthorized use; and (3) any claim for injunctive relief.
          </Text>

          <Text style={styles.p}>
            If this Section is found to be illegal or unenforceable then neither you nor Company will elect to arbitrate any Dispute falling within that portion of this Section found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and you and Company agree to submit to the personal jurisdiction of that court.  
          </Text>

          <Text style={styles.label}>
            SECTION XI. CORRECTIONS
          </Text>

          <Text style={styles.p}>
            Occasionally there may be information on the App and Website that contains typographical errors, inaccuracies or omissions that may relate to service descriptions, pricing, availability, and various other information. Company reserves the right to correct any errors, inaccuracies or omissions and to change or update the information at any time, without prior notice. 
          </Text>

          <Text style={styles.label}>
            SECTION XII. DISCLAIMERS
          </Text>

          <Text style={styles.p}>
            Company cannot control the nature of all of the content available on the App and Website. By operating the App and Website, Company does not represent or imply that Company endorses any blogs, contributions or other content available on or linked to by the App and Website, including without limitation content hosted on third party websites or provided by third party applications, or that Company believes contributions, blogs or other content to be accurate, useful or non-harmful. We do not control and are not responsible for unlawful or otherwise objectionable content you may encounter on the App and Website or in connection with any contributions. The Company is not responsible for the conduct, whether online or offline, of any user of the App and Website or Company Services.
          </Text>

          <Text style={styles.p}>
            YOU AGREE THAT YOUR USE OF THE APP AND WEBSITE AND COMPANY SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, COMPANY, ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE APP AND WEBSITE AND THE COMPANY SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. COMPANY MAKES NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE APP AND WEBSITE’S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THIS APP AND WEBSITE AND ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ANY (A) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (B) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF OUR APP AND WEBSITE, (C) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (D) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE APP AND WEBSITE OR COMPANY SERVICES, (E) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE APP AND WEBSITE BY ANY THIRD PARTY, AND/OR (F) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE APP AND WEBSITE. COMPANY DOES NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE APP AND WEBSITE OR ANY HYPERLINKED WEBSITE OR FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND COMPANY WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.  
          </Text>

          <Text style={styles.label}>
            SECTION XIII. LIMITATIONS OF LIABILITY
          </Text>

          <Text style={styles.p}>
            IN NO EVENT SHALL COMPANY OR ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA OR OTHER DAMAGES ARISING FROM YOUR USE OF THE APP AND WEBSITE OR COMPANY SERVICES, EVEN IF COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, COMPANY’S LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO COMPANY FOR THE COMPANY SERVICES DURING THE PERIOD OF 3 MONTHS PRIOR TO ANY CAUSE OF ACTION ARISING.
          </Text>

          <Text style={styles.p}>
            CERTAIN STATE LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
          </Text>

          <Text style={styles.p}>
            IF YOU ARE A CALIFORNIA RESIDENT, YOU WAIVE CALIFORNIA CIVIL CODE SECTION 1542, WHICH SAYS: "A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH, IF KNOWN BY HIM MUST HAVE MATERIALLY AFFECTED HIS SETTLEMENT WITH THE DEBTOR."
          </Text>

          <Text style={styles.label}>
            SECTION XIV. INDEMNITY
          </Text>

          <Text style={styles.p}>
            You agree to defend, indemnify and hold Company, its subsidiaries, and affiliates, and their respective officers, agents, partners and employees, harmless from and against, any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of your contributed content, use of the Company Services, and/or arising from a breach of this Agreement and/or any breach of your representations and warranties set forth above. Notwithstanding the foregoing, Company reserves the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify Company, and you agree to cooperate, at your expense, with Company’s defense of such claims. Company will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
          </Text>

          <Text style={styles.label}>
            SECTION XV. NOTICES
          </Text>

          <Text style={styles.p}>
            Except as explicitly stated otherwise, any notices given to Company shall be given by email to the address listed in the contact information below. Any notices given to you shall be given to the email address you provided during the registration process, or such other address as each party may specify. Notice shall be deemed to be given twenty-four (24) hours after the email is sent, unless the sending party is notified that the email address is invalid. We may also choose to send notices by regular mail.
          </Text>


          <Text style={styles.label}>
            SECTION XVI. USER DATA
          </Text>

          <Text style={styles.p}>
            Our App and Website will maintain certain data that you transfer to the App and Website for the purpose of the performance of the Company Services, as well as data relating to your use of the Company Services. Although we perform regular routine backups of data, you are primarily responsible for all data that you have transferred or that relates to any activity you have undertaken using the Company Services. You agree that Company shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against Company arising from any such loss or corruption of such data.
          </Text>

          <Text style={styles.label}>
            SECTION XVII. ELECTRONIC CONTRACTING
          </Text>

          <Text style={styles.p}>
            Your use of the Company Services includes the ability to enter into agreements and/or to make transactions electronically. YOU ACKNOWLEDGE THAT YOUR ELECTRONIC SUBMISSIONS CONSTITUTE YOUR AGREEMENT AND INTENT TO BE BOUND BY FOR SUCH AGREEMENTS AND TRANSACTIONS. YOUR AGREEMENT AND INTENT TO BE BOUND BY ELECTRONIC SUBMISSIONS APPLIES TO ALL RECORDS RELATING TO ALL TRANSACTIONS YOU ENTER INTO RELATING TO THE COMPANY SERVICES, INCLUDING NOTICES OF CANCELLATION, POLICIES, CONTRACTS, AND APPLICATIONS. In order to access and retain your electronic records, you may be required to have certain hardware and software, which are your sole responsibility.  
          </Text>

          <Text style={styles.label}>
            SECTION XVIII. MISCELLANEOUS
          </Text>

          <Text style={styles.p}>
            This Agreement constitutes the entire agreement between you and Company regarding the use of the Company Services. The failure of Company to exercise or enforce any right or provision of this Agreement shall not operate as a waiver of such right or provision. The section titles in this Agreement are for convenience only and have no legal or contractual effect. This Agreement operates to the fullest extent permissible by law. This Agreement and your account may not be assigned by you without our express written consent. Company may assign any or all of its rights and obligations to others at any time. Company shall not be responsible or liable for any loss, damage, delay or failure to act caused by any cause beyond Company's reasonable control. If any provision or part of a provision of this Agreement is unlawful, void or unenforceable, that provision or part of the provision is deemed severable from this Agreement and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and Company as a result of this Agreement or use of the App and Website and Company Services. Upon Company’s request, you will furnish Company any documentation, substantiation or releases necessary to verify your compliance with this Agreement. You agree that this Agreement will not be construed against Company by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of this Agreement and the lack of signing by the parties hereto to execute this Agreement.
          </Text>

          <Text style={styles.label}>
            CONTACT US
          </Text>

          <Text style={styles.p}>
            In order to resolve a complaint regarding the Company Services or to receive further information regarding use of the Company Services, please contact Company as set forth below or, if any complaint with us is not satisfactorily resolved, and you are a California resident, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the Department of Consumer Affairs in writing at 400 "R" Street, Sacramento, California 95814 or by telephone at 1-916-445-1254.
          </Text>


          <Text style={styles.p}>
            Quik$avers , LLC 
          </Text>

          <Text style={styles.p}>
            Email: Admin@Quik$avers .com
          </Text>

          <Text style={styles.p}>
            Phone: 855-561-QUIK (7845)
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TOS;
