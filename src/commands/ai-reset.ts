import { AIService } from "@/service/ai.service";
import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("aireset")
  .setDescription("Gemini Chat을 초기화 합니다.");

export async function execute(interaction: CommandInteraction) {
  const aiService = AIService.getInstance();
  aiService.recreateChat();
  return interaction.reply(`AI 초기화 완료`);
}